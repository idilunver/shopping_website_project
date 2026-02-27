// “This repository is for educational/demo purposes only. All product names and datasheets belong to their respective owners.”
// Bunu README kısmına ElectricBike. ürünler için 


import React, { useEffect, useState } from "react";
import {
  Button,
  Snackbar,
  Alert as MuiAlert,
  Drawer,
  Link as MuiLink,
  Typography,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  CssBaseline,
  Modal,
  Badge,
  Divider,
  Card,
  Avatar,
  CardMedia,
  Stack,
  ButtonGroup
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./App.css";
import Logo from "./nexora.png";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import {
  HashRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
  Link
} from "react-router-dom";
import Home from "./Pages/Home";
import Partners from "./Pages/Partners";
import Products from "./Pages/Products";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import LoginForm from "./Components/LoginForm";
import RegisterForm from "./Components/RegisterForm";
import Footer from "./Components/Footer";
import Checkout from "./Checkout";
import { Phone, Email } from "@mui/icons-material";
import './i18n';
import { useTranslation } from "react-i18next";

import { mockProducts } from "./mockData";

const AppContent = () => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const [products, setProducts] = useState(mockProducts);
  const [stock, setStock] = useState({});
  const [cart, setCart] = useState({});
  const [alertMsg, setAlertMsg] = useState(null);
  const [openCart, setOpenCart] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("viewer");
  const navigate = useNavigate();
  const location = useLocation();
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language;

  const getAlertMessage = (key, replacements = {}) => {
    const lang = i18n.language;
    const messages = {
      cart_add: {
        tr: `${replacements.name} sepete eklendi! (Adet: ${replacements.qty})`,
        en: `${replacements.name} added to cart! (Quantity: ${replacements.qty})`,
      },
      logout: {
        tr: "Çıkış yapıldı.",
        en: "Logged out successfully.",
      },
      login_required: {
        tr: "Satın alma işlemi için lütfen giriş yapın.",
        en: "Please login to purchase.",
      }
    };
    return messages[key]?.[lang] || "";
  };

  const navButtonStyle = (path) => ({
    color: location.pathname === path ? "#1976d2" : "#444",
    fontWeight: location.pathname === path ? "600" : "500",
    borderBottom: location.pathname === path ? "2px solid #1976d2" : "2px solid transparent",
    borderRadius: 0,
    fontSize: "1rem",
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      backgroundColor: "transparent",
      color: "#1976d2",
      borderBottom: "2px solid #1976d2"
    }
  });

  const buttonStyle = {
    textTransform: "none",
    fontWeight: 500,
    px: 3,
    borderRadius: "20px",
    color: "#1976d2",
    borderColor: "#1976d2",
    border: "1px solid #1976d2",
    "&:hover": {
      bgcolor: "#e3f2fd",
      borderColor: "#1565c0",
      boxShadow: "0 4px 10px rgba(0,0,0,0.08)"
    }
  };

  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  };

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    const savedUsername = localStorage.getItem("username");
    setIsLoggedIn(loggedIn);
    if (savedUsername) setUsername(savedUsername);
  }, []);

  useEffect(() => {
    const savedRole = localStorage.getItem("role");
    if (savedRole) setRole(savedRole);
  }, []);

  useEffect(() => {
    const initialStock = {};
    products.forEach((p) => {
      initialStock[p.id] = Number(p.stock);
    });
    setStock(initialStock);

    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  // Function to add a product locally (Simulated admin action)
  const handleAddNewProduct = (newProduct) => {
    setProducts((prev) => [...prev, { ...newProduct, id: prev.length + 1 }]);
    setStock((prev) => ({ ...prev, [products.length + 1]: Number(newProduct.stock) }));
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/anasayfa");
    }
  }, [location, navigate]);

  const handleAddToCart = (product) => {
    if (stock[product.id] > 0) {
      const newStock = { ...stock, [product.id]: stock[product.id] - 1 };
      setStock(newStock);

      const updatedCart = { ...cart };
      if (updatedCart[product.id]) {
        updatedCart[product.id].quantity += 1;
      } else {
        updatedCart[product.id] = {
          id: product.id,
          name: product.name,
          image: product.image,
          price: Number(product.price),
          quantity: 1
        };
      }

      setCart(updatedCart);
      setAlertMsg(getAlertMessage("cart_add", {
        name: product.name,
        qty: updatedCart[product.id].quantity,
      }));
    }
  };

  const updateCartQuantity = (productId, delta) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[productId]) {
        updatedCart[productId].quantity += delta;
        if (updatedCart[productId].quantity <= 0) {
          delete updatedCart[productId];
        }
      }
      return updatedCart;
    });
  };

  const cartItemCount = Object.values(cart).reduce((acc, item) => acc + item.quantity, 0);
  const totalCartPrice = Object.values(cart).reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", marginLeft: "6%", marginRight: "6%" }}>
      <Box sx={{ flex: 1 }}>
        <AppBar
          position="sticky"
          elevation={0}
          sx={{ bgcolor: "#ffffff", color: "#222", borderBottom: "1px solid #e0e0e0", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)" }}
        >
          <Toolbar sx={{ justifyContent: "space-between", minHeight: "140px !important", px: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Link to="/anasayfa" style={{ display: "flex", alignItems: "center" }}>
                <img src={Logo} alt="Nexora" style={{ height: 50, cursor: "pointer" }} />
              </Link>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0.5, fontSize: "0.85rem", mt: 0.5, marginLeft: "3%" }}>
              <Box underline="hover" sx={{ display: "flex", alignItems: "center" }}>
                <Phone sx={{ fontSize: "1rem", mr: 0.8, color: "black" }} />
                <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>0 (000) 000 0000</Typography>
              </Box>
              <Box
                underline="hover"
                sx={{ color: "black", display: "flex", alignItems: "center", fontSize: "1rem", "&:hover": { color: "#0a66c2" } }}
              >
                <Email sx={{ fontSize: "0.9rem", mr: 0.8 }} />
                <Typography variant="body2" sx={{ fontSize: "0.9rem" }}> info@nexora.com.tr </Typography>
              </Box>
            </Box>

            <Box sx={{ display: { md: "flex" }, gap: 0.75, textAlign: "center", marginLeft: "3%" }}>
              <Button component={Link} to="/anasayfa" sx={navButtonStyle("/anasayfa")}>{t("navbar.home")}</Button>
              <Button component={Link} to="/urunler" sx={navButtonStyle("/urunler")}>{t("navbar.products")}</Button>
              <Button component={Link} to="/hakkimizda" sx={navButtonStyle("/hakkimizda")}>{t("navbar.about")}</Button>
              <Button component={Link} to="/partners" sx={navButtonStyle("/partners")}>{t("navbar.partners")}</Button>
              <Button component={Link} to="/iletisim" sx={navButtonStyle("/iletisim")}>{t("navbar.contact")}</Button>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                {!isLoggedIn ? (
                  <Button
                    sx={{
                      ...buttonStyle,
                      bgcolor: "#1976d2",
                      color: "white",
                      fontSize: "0.8rem",
                      px: 1.5,
                      py: 0.4,
                      height: 36,
                      borderRadius: "8px",
                      minWidth: "auto",
                      "&:hover": { bgcolor: "#1565c0" }
                    }}
                    onClick={() => setOpenLoginModal(true)}
                  >
                    {currentLang === "tr" ? "Giriş Yap" : "Login"}
                  </Button>
                ) : (
                  <>
                    <Avatar sx={{ bgcolor: "#1976d2", width: 30, height: 30, fontSize: 13 }}>
                      {(username && username.charAt(0).toUpperCase()) || "U"}
                    </Avatar>
                    <Button
                      sx={{
                        ...buttonStyle,
                        bgcolor: "#1976d2",
                        color: "white",
                        fontSize: "0.8rem",
                        px: 1.5,
                        py: 0.4,
                        height: 36,
                        borderRadius: "8px",
                        minWidth: "auto",
                        "&:hover": { bgcolor: "#1565c0" }
                      }}
                      onClick={() => {
                        localStorage.clear();
                        setIsLoggedIn(false);
                        setUsername("");
                        setAlertMsg(currentLang === "tr" ? "Çıkış yapıldı." : "Logged out successfully.");
                        window.location.reload();
                      }}
                    >
                      {currentLang === "tr" ? "Çıkış Yap" : "Logout"}
                    </Button>
                  </>
                )}

                <IconButton color="inherit" onClick={() => setOpenCart(true)} size="small">
                  <Badge badgeContent={cartItemCount} color="error">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              </Box>

              <ButtonGroup variant="outlined" size="small">
                <Button
                  onClick={() => i18n.changeLanguage("tr")}
                  sx={currentLang === "tr" ? {
                    bgcolor: "#1976d2", color: "white",
                    "&:hover": { bgcolor: "#1565c0" }
                  } : {}}
                >
                  TR
                </Button>
                <Button
                  onClick={() => i18n.changeLanguage("en")}
                  sx={currentLang === "en" ? {
                    bgcolor: "#1976d2", color: "white",
                    "&:hover": { bgcolor: "#1565c0" }
                  } : {}}
                >
                  EN
                </Button>
              </ButtonGroup>
            </Box>
          </Toolbar>
        </AppBar>

        <Drawer anchor="right" open={openCart} onClose={() => setOpenCart(false)}>
          <Box sx={{ width: 450, p: 2 }}>
            <Typography variant="h6">
              {currentLang === "tr" ? "Sepetim" : "My Cart"}
            </Typography>
            <Divider sx={{ my: 1 }} />
            {Object.keys(cart).length === 0 ? (
              <Typography>
                {currentLang === "tr" ? "Sepetiniz boş." : "Your cart is empty."}
              </Typography>
            ) : (
              <>
                {Object.values(cart).map((item) => (
                  <Card
                    key={item.id}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      p: 2,
                      mb: 2,
                      borderRadius: 3,
                      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                      transition: "transform 0.2s",
                      "&:hover": { transform: "scale(1.02)" }
                    }}
                  >
                    {item.image && (
                      <CardMedia
                        component="img"
                        image={`images/${item.image}`}
                        alt={item.name}
                        sx={{
                          width: 80,
                          height: 80,
                          objectFit: "cover",
                          borderRadius: 2,
                          mr: 2
                        }}
                      />
                    )}
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="body1">{item.name}</Typography>
                      <Typography variant="body2">
                        {currentLang === "tr" ? "Fiyat" : "Price"}: {item.price} TL
                      </Typography>
                      <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1 }}>
                        <IconButton
                          size="small"
                          onClick={() => {
                            if (item.quantity > 1) {
                              updateCartQuantity(item.id, -1);
                            } else {
                              const updatedCart = { ...cart };
                              delete updatedCart[item.id];
                              setCart(updatedCart);
                            }
                          }}
                        >
                          <RemoveIcon fontSize="small" />
                        </IconButton>
                        <Typography>{item.quantity}</Typography>
                        <IconButton
                          size="small"
                          onClick={() => {
                            const stockQty = stock[item.id] ?? 0;
                            if (item.quantity < stockQty) {
                              updateCartQuantity(item.id, 1);
                            } else {
                              setAlertMsg(
                                currentLang === "tr"
                                  ? `Stokta sadece ${stockQty} adet mevcut.`
                                  : `Only ${stockQty} items in stock.`
                              );
                            }
                          }}
                        >
                          <AddIcon fontSize="small" />
                        </IconButton>
                      </Stack>

                    </Box>
                  </Card>
                ))}
                <Divider sx={{ my: 1 }} />
                <Typography variant="subtitle1">
                  {currentLang === "tr" ? "Toplam" : "Total"}: {totalCartPrice.toFixed(2)} TL
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2 }}
                  onClick={() => {
                    if (!isLoggedIn) {
                      setAlertMsg(
                        currentLang === "tr"
                          ? "Satın alma işlemi için lütfen giriş yapın."
                          : "Please login to purchase."
                      );
                      setOpenLoginModal(true);
                      return;
                    }

                    navigate("/checkout");
                  }}
                >
                  {currentLang === "tr" ? "Satın Al" : "Buy Now"}
                </Button>
              </>
            )}
          </Box>
        </Drawer>

        <ScrollToTop />
        <Routes>
          <Route path="/anasayfa" element={<Home username={isLoggedIn ? username : null} />} />
          <Route path="/urunler" element={<Products products={products} stock={stock} handleBuy={handleAddToCart} selectedCategory="All" role={role} onAddProduct={handleAddNewProduct} />} />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/iletisim" element={<Contact />} />
          <Route path="/checkout" element={<Checkout cart={cart} totalCartPrice={totalCartPrice} />} />
          <Route path="/partners" element={<Partners />} />
        </Routes>

        {!isLoggedIn && (
          <>
            <Modal open={openLoginModal} onClose={() => setOpenLoginModal(false)}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100vh",
                }}
                onClick={() => setOpenLoginModal(false)}
              >
                <Box onClick={(e) => e.stopPropagation()}>
                  <LoginForm
                    setIsLoggedIn={setIsLoggedIn}
                    onClose={() => setOpenLoginModal(false)}
                    onRegisterClick={() => {
                      setOpenLoginModal(false);
                      setOpenRegisterModal(true);
                    }}
                  />
                </Box>
              </Box>
            </Modal>

            <Modal open={openRegisterModal} onClose={() => setOpenRegisterModal(false)}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100vh",
                }}
                onClick={() => setOpenRegisterModal(false)}
              >
                <Box onClick={(e) => e.stopPropagation()}>
                  <RegisterForm
                    onLoginClick={() => {
                      setOpenRegisterModal(false);
                      setOpenLoginModal(true);
                    }}
                  />
                </Box>
              </Box>
            </Modal>
          </>
        )}

        <Snackbar
          open={!!alertMsg}
          autoHideDuration={1500}
          onClose={() => setAlertMsg(null)}
          anchorOrigin={{ vertical: "center", horizontal: "center" }}
        >
          <MuiAlert onClose={() => setAlertMsg(null)} severity="info" sx={{ width: "100%", maxWidth: 400 }}>
            {alertMsg}
          </MuiAlert>
        </Snackbar>
      </Box>
      <Footer />
    </Box>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
