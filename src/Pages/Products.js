import React, { useState, useMemo } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Stack,
  Modal,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  CircularProgress,
  IconButton,
  Tooltip
} from "@mui/material";
import ControlPointDuplicateIcon from "@mui/icons-material/ControlPointDuplicate";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useTranslation } from "react-i18next";

const Products = ({ products, stock, handleBuy, role, onAddProduct }) => {
  const { t, i18n } = useTranslation("products");

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
    category: "",
    description_tr: "",
    description_en: "",
    datasheet: "",
    image: null,
  });

  const categories = useMemo(() => {
    return ["All", "Microcontrollers", "Regulators", "Wireless", "Converters", "Buttons"];
  }, []);

  const translatedCategories = useMemo(() => {
    return categories.map((cat) => t(`category.${cat}`, { defaultValue: cat }));
  }, [categories, t]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (files && files.length > 0) {
      // In a mock environment, we'll just store the filename for simplicity
      setForm((prev) => ({ ...prev, [name]: files[0].name }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate addition delay
    setTimeout(() => {
      onAddProduct(form);
      alert(t("product_added_success"));
      setModalOpen(false);
      setLoading(false);
    }, 500);
  };

  const showDetail = (product) => {
    setSelectedProduct(product);
  };

  const closeDetail = () => {
    setSelectedProduct(null);
  };

  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm((prev) => ({
        ...prev,
        image: URL.createObjectURL(file),
      }));
    }
  };

  if (loading && !modalOpen) return <CircularProgress />;

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ mb: 3, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
          {t("our_products")}
        </Typography>
      </Box>
      <Typography variant="h6" gutterBottom>{t("categories")}</Typography>

      <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
        {translatedCategories.map((cat, idx) => (
          <Button
            key={cat}
            variant={selectedCategory === categories[idx] ? "contained" : "outlined"}
            onClick={() => handleCategoryChange(categories[idx])}
          >
            {cat}
          </Button>
        ))}
      </Stack>

      <Box sx={{ mb: 1, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {role === "admin" && (
          <Button sx={{ marginLeft: "80%" }}
            variant="contained"
            color="success"
            onClick={() => setModalOpen(true)}
            startIcon={<ControlPointDuplicateIcon />}
          >
            {t("add_new_product")}
          </Button>
        )}
      </Box>

      <Grid container spacing={2}>
        {products
          .filter((product) => selectedCategory === "All" || product.category === selectedCategory)
          .map((product) => {
            const productDescription = i18n.language === "en" ? product.description_en : product.description_tr;

            return (
              <Grid item key={product.id} sx={{ display: "flex", justifyContent: "center", width: "20%" }}>
                <Card sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <CardMedia
                    component="img"
                    height="120"
                    image={`images/${product.image}`}
                    alt={product.name}
                    sx={{ objectFit: "contain", p: 1 }}
                  />
                  <CardContent>
                    <Typography variant="h6">{product.name}</Typography>
                    <Typography variant="body2" color="text.secondary">{productDescription}</Typography>
                    <Button variant="outlined" sx={{ mt: 2 }} onClick={() => showDetail(product)}>
                      {t("detail")}
                    </Button>
                    <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                      {product.price} TL
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 1 }}>
                      {t("stock")}: {stock[product.id] ?? 0}
                    </Typography>
                    <Button variant="contained" color="success" fullWidth onClick={() => handleBuy(product)} disabled={stock[product.id] <= 0}>
                      {stock[product.id] <= 0 ? t("out_of_stock") : t("buy")}
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
      </Grid>

      {role === "admin" && (
        <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
          <Box component="form" onSubmit={handleSubmit} sx={{
            position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", bgcolor: "background.paper", boxShadow: 24, p: 4, borderRadius: 2, width: 600, maxHeight: "90vh", overflowY: "auto"
          }}>
            <Typography variant="h6" mb={2}>{t("add_new_product")}</Typography>

            <TextField
              label={t("product_name")}
              name="name"
              fullWidth
              margin="normal"
              value={form.name}
              onChange={handleInputChange}
              required
            />
            <FormControl fullWidth margin="normal" required>
              <InputLabel id="category-label">{t("category_label")}</InputLabel>
              <Select
                labelId="category-label"
                name="category"
                value={form.category}
                label={t("category_label")}
                onChange={handleInputChange}
              >
                {categories.map((cat) => (
                  <MenuItem key={cat} value={cat}>
                    {t(`category.${cat}`, { defaultValue: cat })}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              label={t("Description TR")}
              name="description_tr"
              fullWidth
              margin="normal"
              multiline
              rows={3}
              value={form.description_tr}
              onChange={handleInputChange}
              required
            />
            <TextField
              label={t("Description EN")}
              name="description_en"
              fullWidth
              margin="normal"
              multiline
              rows={3}
              value={form.description_en}
              onChange={handleInputChange}
              required
            />
            <TextField
              label={t("price")}
              name="price"
              type="number"
              fullWidth
              margin="normal"
              value={form.price}
              onChange={handleInputChange}
              required
            />
            <TextField
              label={t("stock")}
              name="stock"
              type="number"
              fullWidth
              margin="normal"
              value={form.stock}
              onChange={handleInputChange}
              required
            />
            <TextField
              label={t("datasheet_url")}
              name="datasheet"
              fullWidth
              margin="normal"
              value={form.datasheet}
              onChange={handleInputChange}
            />

            <Button variant="contained" component="label" sx={{ mt: 1 }}>
              {t("add_image")}
              <input hidden type="file" accept="image/*" name="image" onChange={handleImagePreview} required />
            </Button>

            {form.image && (
              <Tooltip title={t("image_uploaded")}>
                <IconButton disabled>
                  <CheckCircleIcon color="success" />
                </IconButton>
              </Tooltip>
            )}

            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3 }} disabled={loading}>
              {loading ? t("saving") : t("save_product")}
            </Button>
          </Box>
        </Modal>
      )}

      <Modal open={!!selectedProduct} onClose={closeDetail}>
        <Box sx={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", bgcolor: "background.paper", boxShadow: 24, p: 4, borderRadius: 2, width: 500, maxHeight: "80vh", overflowY: "auto"
        }}>
          {selectedProduct && (
            <>
              <Typography variant="h5" mb={2}>
                {selectedProduct.name}
              </Typography>
              <img
                src={`images/${selectedProduct.image}`}
                alt={selectedProduct.name}
                style={{ maxWidth: "100%", maxHeight: 200, objectFit: "contain", marginBottom: 16 }}
              />
              <Typography variant="body1" mb={1}>
                {i18n.language === "en" ? selectedProduct.description_en : selectedProduct.description_tr}
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={1}>
                {t("price")}: {selectedProduct.price} TL
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={2}>
                {t("stock")}: {stock[selectedProduct.id] ?? 0}
              </Typography>
              {selectedProduct.datasheet && (
                <Button variant="outlined" color="primary" href={selectedProduct.datasheet} target="_blank" rel="noopener noreferrer" sx={{ mb: 2 }} >
                  {t("view_datasheet")}
                </Button>
              )}
              <Button variant="contained" onClick={closeDetail} fullWidth>
                {t("back_to_products")}
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default Products;
