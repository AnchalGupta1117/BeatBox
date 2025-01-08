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
      sx={{
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'rgba(255, 105, 180, 0.3)', // Light pink border by default
          },
          '&:hover fieldset': {
            borderColor: 'rgba(255, 105, 180, 0.5)', // Slightly darker pink on hover
          },
          '&.Mui-focused fieldset': {
            borderColor: '#FF69B4', // Hot pink when focused
          },
        },
        '& .MuiInputLabel-root': {
          color: 'rgba(255, 105, 180, 0.7)', // Label color
          '&.Mui-focused': {
            color: '#FF69B4', // Label color when focused
          },
        },
        '& .MuiInputBase-input': {
          color: 'white', // Text color
        },
        marginBottom: 2,
      }}
    />
  );
};

export default FormInput;
