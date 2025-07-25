import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import img1 from "./v_model.jpg";
import img2 from "./uydu.jpg";
import img3 from "./extra.jpg";
import { useTranslation } from "react-i18next";

const Services = ({ }) => {
  const { t } = useTranslation("services");

  const renderBulletList = (key) => {
    const items = t(key, { returnObjects: true });

    if (!Array.isArray(items)) return null;

    return items.map((item, index) => (
      <Typography
        key={index}
        variant="body1"
        sx={{ color: "#444", fontSize: "1.1rem", lineHeight: 1.6, mb: 1 }}
      >
        • {item}
      </Typography>
    ));
  };

  return (
    <Box sx={{ p: 3}}>
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
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
            <Box sx={{ width: { width: "42%" } }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: "#1a1a1a",
                  fontFamily: "Roboto, sans-serif",
                }}
              >
                {t("sectionTitle")}
              </Typography>

              <Divider
                sx={{
                  width: "30%",
                  backgroundColor: "primary.main",
                  marginBottom: "5%",
                }}
              />

              <Typography
                variant="h5"
                sx={{
                  color: "#1a1a1a",
                  fontWeight: "bold",
                  lineHeight: 1.8,
                  mb: 2,
                }}
              >
                {t("militaryTitle")}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#444",
                  fontSize: "1.1rem",
                  lineHeight: 1.4,
                  mb: 2,
                }}
              >
                {t("militaryDescription")}
              </Typography>

              {renderBulletList("militaryList")}
            </Box>

            <Box
              component="img"
              src={img1}
              sx={{
                width: { width: "45%" },
                height: "auto",
                maxHeight: 400,
                objectFit: "cover",
                marginLeft: "8%",
                marginTop: "10%",
              }}
            />
          </Box>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, marginTop: "5%" }}>
            <Box
              component="img"
              src={img2}
              sx={{
                width: { width: "45%" },
                height: "auto",
                maxHeight: 400,
                objectFit: "cover",
                borderRadius: 2,
                boxShadow: 3,
                alignSelf: "center",
                marginTop: "3%",
              }}
            />

            <Box sx={{ width: { width: "45%", marginLeft: "8%" } }}>
              <Typography
                variant="h5"
                sx={{
                  color: "#1a1a1a",
                  fontWeight: "bold",
                  lineHeight: 1.4,
                  mb: 2,
                }}
              >
                {t("techTitle")}
              </Typography>

              {renderBulletList("techList")}
            </Box>
          </Box>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, marginTop: "5%" }}>
            <Box sx={{ width: { width: "50%" } }}>
              <Typography
                variant="h5"
                sx={{
                  color: "#1a1a1a",
                  fontWeight: "bold",
                  lineHeight: 1.4,
                  mb: 2,
                }}
              >
                {t("platformTitle")}
              </Typography>

              {renderBulletList("platformList")}
            </Box>

            <Box
              component="img"
              src={img3}
              sx={{
                width: { width: "40%" },
                height: "auto",
                maxHeight: 400,
                objectFit: "cover",
                borderRadius: 2,
                boxShadow: 3,
                alignSelf: "center",
                marginLeft: "8%",
                marginTop: "3%",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Services;
