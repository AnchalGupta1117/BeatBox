import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import axios from "axios";
import FormInput from "../components/FormInput";
import SubmitButton from "../components/Button";
import FormContainer from "../components/FormContainer";
import darkTheme from "../components/Theme";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();
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
      const backendURL = import.meta.env.VITE_PUBLIC_BACKEND_URL;
      const response = await axios.post(
        `${backendURL}/signup`,
        {
          name: formData.Name,
          email: formData.Email,
          password: formData.password,
        },
        {
          withCredentials: true,
        }
      );
      navigate("/");
      toast.success("Signed up successfully!", {
        duration: 4000, // Toast will disappear after 4 seconds
        position: "top-center",
        style: {
          background: "#4caf50",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "5px",
        },
      });
    } catch (error) {
      console.error(error);
      const errorMessage = error.response?.data?.message || "Signup failed!";

      toast.error(errorMessage, {
        duration: 4000,
        position: "top-center",
        style: {
          background: "#f44336",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "5px",
        },
      });

      console.error(error);
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <FormContainer title="Signup to BeatBox">
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

      <Toaster position="bottom-center" reverseOrder={false} />
    </ThemeProvider>
  );
};

export default SignupForm;