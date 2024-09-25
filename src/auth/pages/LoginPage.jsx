import { Google } from "@mui/icons-material";
import { Alert, Button, Link, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { emailPasswordSignIn, googleSignIn } from "../../store/auth/thunks";
import { useDispatch, useSelector } from "react-redux";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { email, password, onInputChange, formState } = useForm({
    email: "",
    password: "",
  });

  const { status, errorMessage } = useSelector((state) => state.auth);

  const isChecking = status === "checking";

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(emailPasswordSignIn(formState));
  };

  const onGoogleSignIn = () => {
    dispatch(googleSignIn());
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid size={12}>
            <TextField
              label="Email"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
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
            />
          </Grid>
          <Grid
            container
            spacing={2}
            size={12}
            display={errorMessage ? "" : "none"}
          >
            <Grid size={12}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
          </Grid>
          <Grid container spacing={2} size={12}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Button
                variant="contained"
                fullWidth
                type="submit"
                disabled={isChecking}
              >
                <Typography>Login</Typography>
              </Button>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Button
                variant="contained"
                fullWidth
                onClick={onGoogleSignIn}
                disabled={isChecking}
              >
                <Google /> <Typography ml={1}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end" size={12}>
            <Link component={RouterLink} to={"/auth/register"}>
              <Typography>Create new account</Typography>
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
