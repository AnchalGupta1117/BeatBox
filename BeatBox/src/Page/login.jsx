import React, { useState } from "react";
import {ThemeProvider, CssBaseline } from "@mui/material";
import FormInput from "../components/FormInput";
import SubmitButton from "../components/Button";
import FormContainer from "../components/FormContainer";
import darkTheme from "../components/Theme";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    Email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((currData) => ({
      ...currData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <ThemeProvider theme={darkTheme}> 
      <CssBaseline /> 
    <FormContainer title='Login to BeatBox'>
      
      <FormInput
        label="Email"
        name="Email"
        type="email"
        value={formData.Email}
        onChange={handleChange}
      />

      <FormInput
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
      />

      <SubmitButton onClick={handleSubmit} />
    </FormContainer>
    </ThemeProvider>
  );
};

export default LoginPage;
