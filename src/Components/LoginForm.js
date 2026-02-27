import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  InputAdornment,
  IconButton,
  Link
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useTranslation } from "react-i18next";
import { mockUsers } from "../mockData";

const LoginForm = ({ setIsLoggedIn, onClose, onRegisterClick }) => {
  const { t } = useTranslation("loginForm");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulated login check
    const user = mockUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", user.username);
      localStorage.setItem("role", user.role);

      if (rememberMe) {
        localStorage.setItem("rememberMe", "true");
      } else {
        localStorage.removeItem("rememberMe");
      }

      setIsLoggedIn(true);
      onClose();

      window.location.reload();
    } else {
      setError(t("errorInvalid"));
    }
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
        <form onSubmit={handleLogin}>
          <TextField
            label={t("username")}
            fullWidth
            required
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label={t("password")}
            type={showPassword ? "text" : "password"}
            fullWidth
            required
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <FormControlLabel
            control={<Checkbox checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />}
            label={t("rememberMe")}
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
            style={{ marginTop: 10 }}
          >
            {t("loginButton")}
          </Button>
        </form>
        {error && (
          <Typography variant="body2" color="error" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}

        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          {t("noAccount")}{" "}
          <Link
            component="button"
            variant="body2"
            onClick={onRegisterClick}
            sx={{ cursor: "pointer" }}
          >
            {t("register")}
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default LoginForm;
