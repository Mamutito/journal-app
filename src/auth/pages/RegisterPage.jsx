import { Button, Link, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <form>
        <Grid container spacing={2}>
          <Grid size={12}>
            <TextField
              label="Full name"
              type="text"
              placeholder="Full name"
              fullWidth
            />
          </Grid>

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
            <Grid size={12}>
              <Button variant="contained" fullWidth>
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
