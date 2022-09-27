import * as React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Navigation from "../../components/Navigation";
import BreadcrumbsNavigation from "../../components/BreadcrumbsNavigation";
import ProductsList from "../../components/ProductsList";

export default function ProductPage(productID) {
  const router = useRouter();
  console.log(router.route);
  console.log("product?", productID);
  return (
    <Container>
      <Typography>Hello single product</Typography>
    </Container>
  );
}
