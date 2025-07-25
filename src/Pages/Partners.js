import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import profenImg from "./abc.jpg";
import xyzImg from "./xyz.jpg";

const partners = [
  {
    id: 1,
    img: profenImg,
    nameKey: "abc.name",
    descKey: "abc.desc"
  },
  {
    id: 2,
    img: xyzImg,
    nameKey: "xyz.name",
    descKey: "xyz.desc"
  }
];

const Partners = () => {
  const { t } = useTranslation("partners");

  return (
    <Box >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 4,
          mt: 4,
        }}
      ></Box>
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
          {t("title")}
        </Typography>

        <Typography variant="h6" paragraph>
          {t("intro")}
        </Typography>

        {partners.map((partner) => (


          <Grid container spacing={4} alignItems="center" key={partner.id} sx={{ mb: 4 }}>
            <Grid item xs={12} md={6} sx={{ width: "46.5%" }}>
              <Typography variant="h5" gutterBottom>
                {t(partner.nameKey)}
              </Typography>
              <Typography variant="body1">
                {t(partner.descKey)}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} >
              <Box
                component="img"
                src={partner.img}
                alt={t(partner.nameKey)}
                sx={{
                  width: "93%",
                  maxHeight: 300,
                  borderRadius: 4,
                  boxShadow: 2,
                  objectFit: "contain"
                }}
              />
            </Grid>
          </Grid>
        ))}
      </Box>
    </Box>
  );
};

export default Partners;
