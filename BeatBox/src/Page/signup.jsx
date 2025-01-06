import React, { useState } from "react";
import {ThemeProvider, CssBaseline } from "@mui/material";
import axios from "axios";
import FormInput from "../components/FormInput";
import SubmitButton from "../components/Button";
import FormContainer from "../components/FormContainer";
import darkTheme from "../components/Theme";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    Name: "",
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

  const handleSubmit = async () => {
    try {
      console.log(import.meta.env);
      const backendURL = import.meta.env.VITE_BACKEND_URL;
      const response = await axios.post(`${backendURL}/signup`, {
        name: formData.Name,
        email: formData.Email,
        password: formData.password,
      });
      alert("signed up successfully!"); 
    } catch (error) {
      alert("Signup failed!"); 
      console.log(error);
    }
  };

  return (
    <ThemeProvider theme={darkTheme}> 
      <CssBaseline /> 
    <FormContainer title='Signup to BeatBox'>
      <FormInput
        label="Name"
        name="Name"
        type="text"
        value={formData.Name}
        onChange={handleChange}
      />

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

export default SignupForm;
