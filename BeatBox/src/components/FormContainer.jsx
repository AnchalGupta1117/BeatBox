import React from "react";
import { Box, Typography } from "@mui/material";

const FormContainer = ({ title, children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 4,
        mx: "auto",
        width: "100%",
        maxWidth: 700,
        padding: 3,
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <Typography variant="h5" component="h1" gutterBottom
      sx={{
        fontSize: "2rem", fontWeight: "bold"
      }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
};

export default FormContainer;
