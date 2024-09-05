import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export const AuthLayout = ({ children, title = "" }) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Grid
        className="box-shadow"
        size={{ xs: 12, sm: 6, lg: 5 }}
        sx={{ backgroundColor: "white", padding: 3, borderRadius: 2 }}
      >
        <Typography variant="h5" sx={{ mb: 2 }}>
          {title}
        </Typography>

        {children}
      </Grid>
    </Grid>
  );
};
