import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Navigation({ products }) {
  const allProducts = Object.values(products);

  const uniqueDepartment = (value, index, self) => {
    return self.indexOf(value) === index;
  };
  const totalDepartments = [];

  allProducts.forEach((product) => {
    var departmentName = product["department"].name;
    if (!totalDepartments.includes(departmentName)) {
      totalDepartments.push(departmentName);
    }
  });
  // const allDepartments = allProducts.filter(uniqueDepartment);
  const departments = totalDepartments;
  // departments are based on seeded data, which may change if re-seeded
  return (
    <AppBar position="static">
      <Toolbar>
        <Link underline="none" color="inherit" href="/">
          <Typography mr={2}>E-Commerce</Typography>
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
