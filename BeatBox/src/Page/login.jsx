import React, { useEffect, useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import FormInput from '../components/FormInput';
import SubmitButton from '../components/Button';
import FormContainer from '../components/FormContainer';
import darkTheme from '../components/Theme';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/userProvider';

const LoginPage = () => {
  const { fetchUser } = useUserContext();
  const [formData, setFormData] = useState({
    Email: '',
    password: '',
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((currData) => ({
      ...currData,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const backendURL = import.meta.env.VITE_PUBLIC_BACKEND_URL;
      const response = await axios.post(
        `${backendURL}/login`,
        {
          email: formData.Email,
          password: formData.password,
        },
        {
          withCredentials: true,
        }
      );
      await fetchUser();
      toast.success('Signed In successfully!', {
        duration: 4000,
        position: 'top-center',
        style: {
          background: '#4caf50',
          color: '#fff',
          padding: '10px 20px',
          borderRadius: '5px',
        },
      });
      navigate('/');
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Sign In failed!';
      toast.error(errorMessage, {
        duration: 4000,
        position: 'top-center',
        style: {
          background: '#f44336',
          color: '#fff',
          padding: '10px 20px',
          borderRadius: '5px',
        },
      });
      console.error(error);
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <FormContainer title="Login to BeatBox">
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