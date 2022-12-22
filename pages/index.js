import Navigation from "../components/Navigation";
import ProductsList from "../components/ProductsList";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import prisma from "../lib/prisma";
import PRODUCTS from "../data.json";

export default function Home() {
  return (
    <Box>
      <Navigation products={PRODUCTS} />
      <Container maxWidth="lg">
        <ProductsList products={PRODUCTS} />
      </Container>
    </Box>
  );
}
