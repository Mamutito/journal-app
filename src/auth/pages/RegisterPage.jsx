import { Button, Link, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";

export const RegisterPage = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const formValidations = {
    email: [(value) => value.includes("@"), "Must insert a correct email."],
    password: [
      (value) => value.length > 6,
      "Password must be at least 6 characters long",
    ],
    displayName: [(value) => value.length >= 1, "Name is mandatory"],
  };

  const {
    onInputChange,
    formState,
    displayName,
    password,
    email,
    isFormValid,
    emailValid,
    passwordValid,
    displayNameValid,
  } = useForm(
    {
      displayName: "",
      password: "",
      email: "",
    },
    formValidations
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    console.log(formState);
  };
  return (
    <AuthLayout title="Register">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid size={12}>
            <TextField
              label="Full name"
              type="text"
              placeholder="Full name"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && isFormSubmitted}
              helperText={isFormSubmitted && displayNameValid}
            />
          </Grid>

          <Grid size={12}>
            <TextField
              label="Email"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && isFormSubmitted}
              helperText={isFormSubmitted && emailValid}
            />
          </Grid>
          <Grid size={12}>
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && isFormSubmitted}
              helperText={isFormSubmitted && passwordValid}
            />
          </Grid>

          <Grid container spacing={2} size={12}>
            <Grid size={12}>
              <Button variant="contained" fullWidth type="submit">
                <Typography>Create account</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end" size={12}>
            <Typography>Already have an account?</Typography>
            <Link component={RouterLink} to={"/auth/login"}>
              <Typography>Sign In</Typography>
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
