import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Navigation() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography mr={2}>All products</Typography>
        <Typography mr={2}>Women</Typography>
        <Typography>Men</Typography>
      </Toolbar>
    </AppBar>
  );
}
