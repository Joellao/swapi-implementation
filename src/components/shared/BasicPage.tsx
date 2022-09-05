import SearchIcon from "@mui/icons-material/Search";
import {
  alpha,
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  FormControl,
  InputBase,
  InputLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Link,
  Select,
  styled,
  Toolbar,
  Typography,
  Snackbar,
  SnackbarOrigin,
  Alert,
  IconButton,
  Divider,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "../../utils/axiosConfig";
import { TitleWord } from "../../utils/helperFunctions";
import { BaseProp, ResourceProp } from "../../utils/Interfaces";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import TheatersIcon from "@mui/icons-material/Theaters";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import PublicIcon from "@mui/icons-material/Public";
import AltRouteIcon from "@mui/icons-material/AltRoute";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth } from "../../hooks/useAuth";
const drawerWidth = 240;

interface Props {
  window?: () => Window;
}

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: theme.spacing(1),
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1.7, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "7ch",
    [theme.breakpoints.up("sm")]: {
      width: "7ch",
      "&:focus": {
        width: "7ch",
      },
    },
  },
}));

export interface State extends SnackbarOrigin {
  open: boolean;
}

const BasicPage = (props: Props) => {
  const [state, setState] = useState<State>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;
  const [resources, setResources] = useState<ResourceProp[]>([]);
  const [search, setSearch] = useState<string>("");
  const [selectResource, setSelectResource] = useState<string>("people");
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { logout } = useAuth()!;

  const navigate = useNavigate();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const fetchResources = async () => {
    const res = await axios.get("/");
    let data = res.data;
    let array: ResourceProp[] = [];
    Object.keys(data).forEach(function (key, index) {
      array.push({ key: key, uri: data[key] });
    });

    setResources(array);
    setIsLoading(false);
  };

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await axios.get(
      `https://swapi.dev/api/${selectResource}/?search=${search}`
    );
    let data: BaseProp = res.data;
    if (data.count === 0) {
      setState({ open: true, vertical: "top", horizontal: "right" });
    } else {
      navigate("/search", { state: { key: selectResource, data } });
    }
  };

  useEffect(() => {
    fetchResources();
  }, []);

  const handleSpecificResource = (item: ResourceProp) => {
    navigate(`resources/${item.key}`);
  };

  const handleLogout = async () => {
    logout();
  };

  const keyIconMap = new Map();
  keyIconMap.set("people", <AccessibilityNewIcon />);
  keyIconMap.set("films", <TheatersIcon />);
  keyIconMap.set("planets", <PublicIcon />);
  keyIconMap.set("species", <AltRouteIcon />);
  keyIconMap.set("starships", <RocketLaunchIcon />);
  keyIconMap.set("vehicles", <TimeToLeaveIcon />);

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const drawer = (
    <div>
      <Toolbar />
      <Box
        sx={{
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "space-between",
        }}
      >
        <List>
          {resources.map((item, index) => (
            <ListItem key={item.key} disablePadding>
              <ListItemButton onClick={() => handleSpecificResource(item)}>
                <ListItemIcon>{keyIconMap.get(item.key)}</ListItemIcon>
                <ListItemText primary={TitleWord(item.key)} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem key={"logout"} disablePadding>
            <ListItemButton onClick={handleLogout}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary={"Logout"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </div>
  );
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
          >
            <Link href="/" color="#fff" underline="none">
              SWAPI
            </Link>
          </Typography>
          <form
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
            onSubmit={handleSearch}
          >
            <FormControl sx={{ width: 150, height: 50 }}>
              <InputLabel id="simple-select-label">Resource</InputLabel>
              <Select
                sx={{ height: 50 }}
                color="primary"
                labelId="simple-select-label"
                id="simple-select"
                value={selectResource}
                onChange={(e) => setSelectResource(e.target.value)}
                label="Resource"
              >
                <MenuItem value={"people"}>People</MenuItem>
                <MenuItem value={"films"}>Films</MenuItem>
                <MenuItem value={"planets"}>Planets</MenuItem>
                <MenuItem value={"species"}>Species</MenuItem>
                <MenuItem value={"starships"}>Starships</MenuItem>
                <MenuItem value={"vehicles"}>Vehicles</MenuItem>
              </Select>
            </FormControl>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <button style={{ display: "none" }} type="submit" />
          </form>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
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
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
      <Snackbar
        autoHideDuration={6000}
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        key={vertical + horizontal}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          No resources found with this value!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default BasicPage;
