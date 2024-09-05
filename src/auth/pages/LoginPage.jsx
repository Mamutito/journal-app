import { Google } from "@mui/icons-material";
import { Button, Link, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <form>
        <Grid container spacing={2}>
          <Grid size={12}>
            <TextField
              label="Email"
              type="email"
              placeholder="correo@google.com"
              fullWidth
            />
          </Grid>
          <Grid size={12}>
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              fullWidth
            />
          </Grid>

          <Grid container spacing={2} size={12}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Button variant="contained" fullWidth>
                <Typography>Login</Typography>
              </Button>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Button variant="contained" fullWidth>
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
