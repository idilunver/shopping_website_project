import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton, Button } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const images = [
  `${process.env.PUBLIC_URL}/images/uydu_599e3.jpg`,
  `${process.env.PUBLIC_URL}/images/hardware.jpg`,
  `${process.env.PUBLIC_URL}/images/0JA7Lbox1aYtZyIRefwB.jpg`
];

export default function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const { t } = useTranslation("slideshow");

  const slideTexts = [
    t("slide1", { returnObjects: true }),
    t("slide2", { returnObjects: true }),
    t("slide3", { returnObjects: true }),
  ];

  const goToNext = () => setCurrentIndex((i) => (i + 1) % images.length);
  const goToPrev = () =>
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));

  useEffect(() => {
    const interval = setInterval(goToNext, 12000);
    return () => clearInterval(interval);
  }, []);

  const navBtn = (side) => ({
    position: "absolute",
    top: "50%",
    [side]: 16,
    transform: "translateY(-50%)",
    bgcolor: "rgba(0,0,0,0.3)",
    color: "#fff",
    "&:hover": { bgcolor: "rgba(0,0,0,0.5)" },
    zIndex: 3,
  });

  return (
    <Box sx={{ position: "relative", overflow: "hidden", height: 600 }}>
      <motion.img
        key={currentIndex}
        src={images[currentIndex]}
        alt={t(`slide_alt`, { index: currentIndex + 1 })}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />

      <Box
        key={currentIndex}
        sx={{
          position: "absolute",
          bottom: 90,
          left: 40,
          zIndex: 2,
          maxWidth: "70%",
          color: "#fff",
        }}
      >
        <Box
          sx={{
            borderRadius: "12px",
            p: 3,
          }}
        >
          {slideTexts[currentIndex].map((line, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: idx * 0.25,
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              <Typography
                variant={idx === 0 ? "h3" : "h6"}
                sx={{
                  mb: idx === 0 ? 1 : 0.5,
                  fontWeight: idx === 0 ? "medium" : "normal",
                  color: "#fff",
                  textShadow: "1px 1px 4px rgba(0,0,0,0.7)",
                }}
              >
                {line}
              </Typography>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              delay: slideTexts[currentIndex].length * 0.25,
              duration: 0.7,
              type: "spring",
              stiffness: 120,
            }}
          >
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{
                mt: 3,
                px: 4,
                py: 1.5,
                fontSize: "1.1rem",
                fontWeight: "bold",
                boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
                borderRadius: "8px",
              }}
              onClick={() => navigate("/urunler")}
            >
              {t("more_info_button")}
            </Button>
          </motion.div>
        </Box>
      </Box>

      <IconButton onClick={goToPrev} sx={navBtn("left")}>
        <ArrowBackIos />
      </IconButton>
      <IconButton onClick={goToNext} sx={navBtn("right")}>
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
}
