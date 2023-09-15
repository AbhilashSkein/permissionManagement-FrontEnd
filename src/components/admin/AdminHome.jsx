import * as React from "react";
import { styled,Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

import AppBar from "@mui/material/AppBar";
import { Card, CardHeader, FormLabel, Stack, TextField, makeStyles } from "@mui/material";
import Logout from "../../auth/Logout";
import Loader from "../Loader";
import { useTheme } from "styled-components";

const drawerWidth = 240;
 
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));


export default function AdminHome() {

    const [isLoading, setIsLoading] = React.useState(true);
    React.useEffect(()=>{
        setTimeout(()=>{
          setIsLoading(false)
        },1000);
      });
  return (
    <>
    {isLoading ? <Loader /> :
     <Box sx={{ display: "flex" }}>
     <CssBaseline />
     <AppBar position="fixed">
      
       <Toolbar>
         <Typography
           className="homeProjectProfile"
           variant="h6"
           noWrap
           component="div"
         >
           Mini variant drawerrrr
         </Typography>
         <Logout />
       </Toolbar>
     </AppBar>
     <Drawer variant="permanent" style={{ width: "200px" }}>
       <DrawerHeader style={{backgroundColor:"white",height:"60px"}}>
         <h1>Avatar</h1>
       </DrawerHeader>
       <Divider />
       <List style={{marginTop:"30px",marginLeft:"20px",color:"white"}}>
         <ListItem>Home</ListItem>
         <ListItem>
           <ListItemButton>DashBoard</ListItemButton>
         </ListItem>
         <ListItem>Modules</ListItem>
         <ListItem>
           <ListItemButton>DashBoard</ListItemButton>
         </ListItem>
         <ListItem>
           <ListItemButton>DashBoard</ListItemButton>
         </ListItem>
       </List>
     </Drawer>
     <Box className="homeProjectBox">
       <Card style={{ height: "600px", width: "800px" }}>
         <Typography variant="h3" style={{ textAlign: "center" }}>
           Form
         </Typography>
         <Divider />
         <form className="formOne">
           <Stack direction="row">
             <FormLabel>Start Time</FormLabel>
             <TextField size="small" type="time" style={{marginLeft:'10px',width:'200px'}}/>
             <Stack direction='row' style={{marginLeft:'100px'}}>
               <FormLabel>End Time</FormLabel>
               <TextField size="small"  style={{marginLeft:'10px',width:'200px'}}/>
             </Stack>
           </Stack>
           <Stack style={{marginTop:'50px'}} direction='row'>
           <FormLabel>Date</FormLabel>
             <TextField size="small" type="time" style={{marginLeft:'10px',width:'200px'}}/>
           </Stack>
         </form>
       </Card>
     </Box>
   </Box>
    }
    
    </>
   
  );
}