import React from "react";
import { Box, Typography } from "@mui/material";

const FormContainer = ({ title, children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: { xs: 25, sm: 4 },
        mx: "auto",
        width: "90%",
        height: "100%",
        maxWidth: { xs: "100%", sm: 500, md: 700 },
        padding: { xs: 3, sm: 3 },
        border: "1px solid #ccc",
        borderRadius: "12px",
        backgroundColor: "#090601",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography 
        variant="h5" 
        component="h1" 
        gutterBottom
        sx={{
          fontSize: { xs: "1.75rem", sm: "2rem" },
          fontWeight: "bold",
          color: "white",
          textAlign: "center",
          mb: { xs: 3, sm: 4 },
        }}
      >
        {title}
      </Typography>
      {children}
    </Box>
  );
};

export default FormContainer;
