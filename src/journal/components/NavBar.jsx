import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import {
  AppBar,
  Grid2 as Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { startSignOut } from "../../store/auth/thunks";

export const NavBar = ({ drawerWidth }) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(startSignOut());
  };
  return (
    <AppBar
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton color="inherit" sx={{ mr: 2, display: { sm: "none" } }}>
          <MenuOutlined />
        </IconButton>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          size={12}
        >
          <Typography variant="h6" noWrap component="div">
            JournalApp
          </Typography>

          <IconButton color="error" onClick={handleLogout}>
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
