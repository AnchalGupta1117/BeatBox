import React from "react";
import { Button } from "@mui/material";

const SubmitButton = ({ onClick }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      fullWidth
      sx={{ mt: 2 }}
      onClick={onClick}
    >
      Submit
    </Button>
  );
};

export default SubmitButton;
