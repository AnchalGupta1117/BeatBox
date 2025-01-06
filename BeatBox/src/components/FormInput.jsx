import React from "react";
import { TextField } from "@mui/material";

const FormInput = ({ label, name, type, value, onChange }) => {
  return (
    <TextField
      label={label}
      variant="outlined"
      fullWidth
      margin="normal"
      name={name}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export default FormInput;
