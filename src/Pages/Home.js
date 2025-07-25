import React from "react";
import { Typography, Box } from "@mui/material";
import Slideshow from "./Slideshow";
import img from "./biz_kimiz.jpg";
import { useTranslation } from "react-i18next";

const Home = ({ username }) => {
  const { t } = useTranslation();
  return (
    <Box sx={{ p: 3 }}>
      <Slideshow />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 4,
          mt: 4,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" gutterBottom sx={{ color: "#333", fontWeight: 600 }}>
            {t("aboutTitle")}
          </Typography>

          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: "#1a1a1a",
              mb: 3,
              lineHeight: 1,
              fontFamily: "Roboto, sans-serif",
              fontSize: "2rem",
            }}
          >
            {t("aboutHeadline")}
          </Typography>

          <Typography variant="body1" sx={{ color: "#444", fontSize: "1.1rem", lineHeight: 1.8, mb: 2 }}>
            {t("aboutParagraph1")}
          </Typography>

          <Typography variant="body1" sx={{ color: "#444", fontSize: "1.1rem", lineHeight: 1.8, mb: 2 }}>
            {t("aboutParagraph2")}
          </Typography>

          <Typography variant="body1" sx={{ color: "#444", fontSize: "1.1rem", lineHeight: 1.8, mb: 2 }}>
            {t("aboutParagraph3")}
          </Typography>

        </Box>

        <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <Box
            component="img"
            src={img}
            alt="Ofis"
            sx={{
              width: "75%",
              height: "auto",
              maxHeight: 400,
              objectFit: "cover",
              borderRadius: 2,
              boxShadow: 1,
              justifyContent: "center",
              marginTop: "10%",
            }}
          />
        </Box>
      </Box>
    </Box>

  );
};

export default Home;
