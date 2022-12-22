import * as React from "react";
import { useRouter } from "next/router";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Navigation from "../../components/Navigation";
import CollectionProducts from "../../components/CollectionProducts";
import BreadcrumbsNavigation from "../../components/BreadcrumbsNavigation";

export default function Games() {
  const router = useRouter();
  const collectionName = router.route.split("/")[2];

  return (
    <Box>
      <Navigation products={PRODUCTS} />
      <Container maxWidth="lg">
        <BreadcrumbsNavigation title={collectionName} />
        <CollectionProducts products={PRODUCTS} />
      </Container>
    </Box>
  );
}
