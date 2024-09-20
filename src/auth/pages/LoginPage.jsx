import { Google } from "@mui/icons-material";
import { Button, Link, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { checkingAuthentication, googleSignIn } from "../../store/auth/thunks";
import { useDispatch, useSelector } from "react-redux";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm({
    email: "",
    password: "",
  });

  const status = useSelector((state) => state.auth.status);

  const isChecking = status === "checking";
  console.log(isChecking);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(checkingAuthentication(email, password));
    console.log({ email, password });
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
