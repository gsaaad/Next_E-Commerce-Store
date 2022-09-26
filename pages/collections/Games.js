import * as React from "react";
import { useRouter } from "next/router";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Navigation from "../../components/Navigation";
import ProductsList from "../../components/ProductsList";
import PRODUCTS from "../../data.json";

export default function Games() {
  const router = useRouter();
  const { collectionName } = router.query;
  const products = PRODUCTS.filter(
    (product) => product.collection === collectionName
  );
  return (
    <Box>
      <Navigation />
      <Container maxWidth="lg">
        <BreadcrumbsNavigation collection={collectionName} />
        <ProductsList products={products} />
      </Container>
    </Box>
  );
}
