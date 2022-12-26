import React from 'react'
import { useForm } from "react-hook-form";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import './LoginPage.scss'
import { LoginService } from '../../Api/Services/authService';

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();


  const onSubmit = async field => {
    await LoginService(field)
    window.location = '/'
  };


  return (
    <div className="formContainer">
      <h1 className="header">Login</h1>
      <Stack
      component="form"
      spacing={2}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        label="email"
        {...register("email")}
        size="small"
      />
      <TextField
        hiddenLabel
        id="filled-hidden-label-normal"
        label="password"
        {...register("password", { required: true })}
        error={errors.password}
      />
      <Button variant="outlined" className="submitBtn" type='submit' >submit</Button>
      {errors.password && <span>This field is required</span>}
    </Stack>
    </div>
  );
}

export default LoginPage

