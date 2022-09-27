import * as React from "react";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function BreadcrumbsNavigation({ title }) {
  return (
    <Box mt={2}>
      <Breadcrumbs separator=">" aria-label="breadcrumb" color="#ffffff">
        <Link underline="hover" key="1" color="inherit" href="/">
          <Typography key="4" color="#ffffff">
            Products
          </Typography>
        </Link>
        <Typography key="3" color="#ffffff">
          {title && title.replace(/^\w/, (c) => c.toUpperCase())}
        </Typography>
      </Breadcrumbs>
    </Box>
  );
}
