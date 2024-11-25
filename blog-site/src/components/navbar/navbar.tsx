import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
} from "@mui/material";
import { Menu, Adjust, Close } from "@mui/icons-material";
import { useState } from "react";
import navItems from "@/src/config/constant";
import theme from "@/src/helpers/theme";
import { useRouter } from "next/router";

const drawerWidth = 240;

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const router = useRouter();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingX: "20px",
        }}
      >
        <Box
          sx={{
            my: 3 / 2,
            display: "flex",
            alignItems: "center",
            columnGap: "5px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
            }}
            onClick={() => router.push("/")}
          >
            <Adjust />
            <Typography variant="h6">Izhor blogs</Typography>
          </Box>
        </Box>
        <IconButton>
          <Close />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => router.push(item.route)}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        sx={{
          height: "8vh",
          backgroundColor: theme.palette.grey[800],
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <Menu />
          </IconButton>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              columnGap: "10px",
            }}
          >
            <Box
              onClick={() => router.push("/")}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                cursor: "pointer",
              }}
            >
              <Adjust />
              <Typography variant="h6" component="div">
                Izhor blogs
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                sx={{ color: "#fff" }}
                onClick={() => router.push(item.route)}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // better open perforamnce on mobile
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Navbar;
