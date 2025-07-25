import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Divider
} from "@mui/material";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation("contact");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box sx={{ p: 2, width: "50%", justifyContent: "flex-end" }}>
        <Typography  variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
          {t("page_title")}
        </Typography>
        <Typography variant="body1" mb={3}>
          {t("page_description")}
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item>
              <TextField
                label={t("first_name")}
                name="firstName"
                fullWidth
                variant="standard"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item>
              <TextField
                label={t("last_name")}
                name="lastName"
                fullWidth
                variant="standard"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item>
              <TextField
                label={t("email")}
                name="email"
                type="email"
                fullWidth
                variant="standard"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item>
              <TextField
                label={t("phone")}
                name="phone"
                fullWidth
                variant="standard"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item>
              <TextField
                label={t("subject")}
                name="subject"
                fullWidth
                variant="standard"
                value={formData.subject}
                onChange={handleChange}
              />
            </Grid>

            <Grid item sx={{ width: "94%" }}>
              <TextField
                label={t("message")}
                name="message"
                fullWidth
                multiline
                rows={4}
                variant="standard"
                value={formData.message}
                onChange={handleChange}
              />
            </Grid>

            <Grid item sx={{ marginLeft: "70%" }}>
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 2 }}
              >
                {t("send")}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>

      <Box sx={{ width: "20%", marginTop:"3%" }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
          {t("address")}
        </Typography>
        <Divider sx={{ width: "50px", backgroundColor: "primary.main", mb: 2 }} />
        <Typography variant="body2" gutterBottom>{t("office")}:</Typography>
        <Typography variant="body2">{t("office_address")}</Typography>

      </Box>

      <Box sx={{ width: "20%", marginTop:"1.2%" }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", mt: 4 }}>
          {t("contact_numbers")}
        </Typography>
        <Divider sx={{ width: "50px", backgroundColor: "primary.main", mb: 2 }} />
        <Typography variant="body2">{t("phone1")}</Typography>
        <Typography variant="body2">{t("phone2")}</Typography>
        <Typography variant="body2">{t("email_contact")}</Typography>
      </Box>
    </Box>
  );
};

export default Contact;
