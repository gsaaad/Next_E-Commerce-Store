import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Navigation({ products }) {
  const departments = Object.keys(products);
  // departments are based on seeded data, which may change if re-seeded
  return (
    <AppBar position="static">
      <Toolbar>
        <Link underline="none" color="inherit" href="/">
          <Typography mr={2}>All products</Typography>
        </Link>
        {departments.map((department) => {
          const departmentLink = `/collections/${department}`;
          return (
            <Link
              underline="none"
              color="inherit"
              href={departmentLink}
              key={department}
            >
              <Typography mr={2}>{department}</Typography>
            </Link>
          );
        })}
      </Toolbar>
    </AppBar>
  );
}
