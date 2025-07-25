import React from "react";
import { Box, Typography, Grid, Link as MuiLink, List, ListItem, ListItemText, Divider } from "@mui/material";
import { LinkedIn, Phone, Room, Email, AccessTime } from "@mui/icons-material";
import Logo from "./nexora.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("footer");

  return (
    <Box sx={{ bgcolor: "#ffffff", color: "#000",mt: 4, fontFamily: "Roboto, sans-serif" , marginBottom:"9%", marginTop:"6%"}}>
  <Grid container spacing={4} alignItems="flex-start" >
    
    <Grid item xs={12} md={4} sx={{width:"40%"}}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <img src={Logo} alt="Nexora" style={{ height: 50 }} />
      </Box>

      <Typography variant="subtitle1" sx={{ fontWeight: 600, fontSize: "1rem", mb: 1 }}>
        {t("companyDescription")}
      </Typography>

      <ul style={{ paddingLeft: 20, lineHeight: 1.8, fontSize: "0.95rem", margin: 0 }}>
        {t("products", { returnObjects: true }).map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </Grid>

    <Grid item xs={12} md={4} sx={{width:"25%"}}>
      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
        {t("quickLinks")}
      </Typography>
      <Divider sx={{ width: "50%", backgroundColor: "primary.main", mb: 2 }} />

      <Box sx={{ display: "flex", gap: 4 }}>
        <List dense>
          <ListItem button component={Link} to="/anasayfa" sx={{ py: 0.5, color: "primary.main" }}>
            <ListItemText primary={t("quickLinksItems.home")} />
          </ListItem>
          <ListItem button component={Link} to="/urunler" sx={{ py: 0.5, color: "primary.main" }}>
            <ListItemText primary={t("quickLinksItems.products")} />
          </ListItem>
           <ListItem button component={Link} to="/hakkimizda" sx={{ py: 0.5, color: "primary.main" }}>
            <ListItemText primary={t("quickLinksItems.aboutUs")} />
          </ListItem>
        </List>

        <List dense>
          <ListItem button component={Link} to="/iletisim" sx={{ py: 0.5, color: "primary.main" }}>
            <ListItemText primary={t("quickLinksItems.contact")} />
          </ListItem>
          <ListItem button component={Link} to="/partners" sx={{ py: 0.5, color: "primary.main",  }}>
            <ListItemText primary={t("quickLinksItems.partners")} />
          </ListItem>
        </List>
      </Box>
    </Grid>

    <Grid item xs={12} md={4}>
      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
        {t("contact")}
      </Typography>
      <Divider sx={{ width: "40%", backgroundColor: "primary.main", mb: 2 }} />

      <Box sx={{ display: "flex", alignItems: "flex-start", mb: 1.5 }}>
        <Room fontSize="small" sx={{ mr: 1, mt: 0.5 }} />
        <Typography variant="body2" dangerouslySetInnerHTML={{ __html: t("contactDetails.address") }} />
      </Box>

      <Box sx={{ display: "flex", alignItems: "flex-start", mb: 1.5 }}>
        <AccessTime fontSize="small" sx={{ mr: 1, mt: 0.5 }} />
        <Typography variant="body2">{t("contactDetails.workingHours")}</Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "flex-start", mb: 1.5 }}>
        <Phone fontSize="small" sx={{ mr: 1 }} />
        <Typography variant="body2">{t("contactDetails.phone")}</Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <MuiLink
          href="https://www.linkedin.com/company/svd-sistem/posts/?feedView=all"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
          sx={{
            display: "flex",
            alignItems: "center",
            color: "black",
            "&:hover": { color: "#0a66c2" },
          }}
        >
          <LinkedIn sx={{ mr: 1 }} />
          {t("contactDetails.linkedin")}
        </MuiLink>

        <MuiLink
          href="mailto:info@svdsistem.com.tr"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
          sx={{
            display: "flex",
            alignItems: "center",
            color: "black",
            "&:hover": { color: "#0a66c2" },
          }}
        >
          <Email fontSize="small" sx={{ mr: 1 }} />
          {t("contactDetails.email")}
        </MuiLink>
      </Box>
    </Grid>

  </Grid>
</Box>
  );
};

export default Footer;
