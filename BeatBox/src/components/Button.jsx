import React from "react";
import { Button } from "@mui/material";

const SubmitButton = ({ onClick }) => {
  return (
    <Button
      variant="contained"
      fullWidth
      onClick={onClick}
      sx={{
        mt: 2,
        fontSize: { xs: "0.875rem", sm: "1rem" }, // Adjust font size for smaller screens
        padding: { xs: "8px 16px", sm: "10px 20px" },
        backgroundColor: "#FF69B4", // Hot pink color
        '&:hover': {
          backgroundColor: "#FF1493",},
      }}
    >
      SUBMIT
    </Button>
  );
};

export default SubmitButton;
