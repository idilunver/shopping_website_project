import React from "react";
import { Box, Typography } from "@mui/material";
import { Business } from "@mui/icons-material";
import img from "./image.jpg";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation("about");

  return (
    <Box sx={{ p: 3 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 4,
          mt: 4
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#1a1a1a",
              mb: 3,
              fontFamily: "Roboto, sans-serif",
            }}
          >
            {t("company_name")}
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "#444", fontSize: "1.1rem", lineHeight: 1.8, mb: 2 }}
          >
            <Business sx={{ color: "#1976d2", mr: 1, verticalAlign: "middle" }} />
            {t("location_info")}
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "#444", fontSize: "1.1rem", lineHeight: 1.8, mb: 2 }}
          >
            {t("founder_info")}
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "#444", fontSize: "1.1rem", lineHeight: 1.8, mb: 3 }}
          >
            {t("mission_intro")}
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, mt: 3 }}>
            {t("our_mission")}
          </Typography>
          <Typography variant="body1" sx={{ color: "#444" }}>
            {t("tech_mission")}
          </Typography> 

          <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, mt: 3 }}>
            {t("our_vision")}
          </Typography>
          <Typography variant="body1" sx={{ color: "#444" }}>
            {t("vision")}
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, mt: 3 }}>
            {t("quality_policy")}
          </Typography>
          <Typography variant="body1" sx={{ color: "#444", mb: 2 }}>
            {t("quality_1")}
          </Typography>
          <Typography variant="body1" sx={{ color: "#444", mb: 2 }}>
            {t("quality_2")}
          </Typography>
          <Typography variant="body1" sx={{ color: "#444", mb: 2 }}>
            {t("quality_3")}
          </Typography>
          <Typography variant="body1" sx={{ color: "#444", mb: 2 }}>
            {t("quality_4")}
          </Typography>
        </Box>

        <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <Box
            component="img"
            src={img}
            alt="Demo Office"
            sx={{
              width: "80%",
              height: "auto",
              maxHeight: 400,
              objectFit: "cover",
              borderRadius: 2,
              boxShadow: 3,
              mt: { xs: 3 },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
