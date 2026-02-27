import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useTranslation } from "react-i18next";

const RegisterForm = ({ onClose, onLoginClick }) => {
  const { t } = useTranslation("register");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("error");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setMessage(t("emailInvalid"));
      setMessageColor("error");
      return;
    }

    // Since we don't have a backend to store new users permanently,
    // we'll just simulate a successful registration.
    setMessage(t("registerSuccess"));
    setMessageColor("success");
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <Grid>
      <Paper elevation={10} style={{ padding: 20, width: 300, margin: "20px auto" }}>
        <Grid align="center">
          <Avatar style={{ backgroundColor: "#1bbd7e" }}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>{t("title")}</h2>
        </Grid>
        <form onSubmit={handleRegister}>
          <TextField
            label={t("username")}
            fullWidth
            required
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label={t("email")}
            fullWidth
            required
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label={t("password")}
            type="password"
            fullWidth
            required
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
            style={{ marginTop: 10 }}
          >
            {t("registerButton")}
          </Button>
        </form>

        {message && (
          <Typography variant="body2" color={messageColor} sx={{ mt: 2 }}>
            {message}
          </Typography>
        )}

        <Typography sx={{ mt: 2 }}>
          {t("haveAccount")}{" "}
          <Link onClick={onLoginClick} sx={{ cursor: "pointer" }}>
            {t("login")}
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default RegisterForm;
