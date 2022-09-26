import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Navigation({ products }) {
  const departments = Object.keys(products);
  // departments are based on seeded data, which may change if re-seeded

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography mr={2}>All products</Typography>
        {departments.map((department) => {
          return <Typography mr={2}>{department}</Typography>;
        })}
      </Toolbar>
    </AppBar>
  );
}
