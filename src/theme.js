import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0079c1",   
    },
    secondary: {
      main: "#004b87",   
    },
    background: {
      default: "#ffffff", 
    },
    text: {
      primary: "#1a1a1a", 
    },
  },

  typography: {
    fontFamily: `"Segoe UI", Roboto, Arial, sans-serif`,
    button: {
      fontWeight: 600,
      textTransform: "none",
      fontSize: "0.875rem",
    },
    h5: {
      fontWeight: 700,
    },
  },

  shape: {
    borderRadius: 8,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },

    MuiInput: {
      styleOverrides: {
        root: {
          color: "#1a1a1a",
          "&:before": {
            borderBottom: "1px solid #ccc",
          },
          "&:after": {
            borderBottom: "2px solid #0079c1",
          },
        },
        underline: {
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: "1px solid #999",
          },
        },
        input: {
          padding: "6px 0",
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#666",
          fontSize: "14px",
        },
      },
    },

    MuiFormControl: {
      styleOverrides: {
        root: {
          marginBottom: 16,
        },
      },
    },
  },
});

export default theme;
