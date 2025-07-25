import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Checkout = ({ cart, totalCartPrice }) => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>Satın Alma İşlemi</Typography>

      {Object.values(cart).map((item) => (
        <Box key={item.id} sx={{ mb: 2 }}>
          <Typography>{item.name} x {item.quantity} - {item.price} TL</Typography>
        </Box>
      ))}

      <Typography variant="h6" sx={{ mt: 2 }}>Toplam: {totalCartPrice.toFixed(2)} TL</Typography>

      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 3 }}
        onClick={() => alert("Satın alma başarıyla tamamlandı!")}
      >
        Ödemeyi Tamamla
      </Button>
    </Box>
  );
};

export default Checkout;
