import Navigation from "../components/Navigation";
import ProductsList from "../components/ProductsList";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

// import prisma
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default function Home({ products }) {
  return (
    <Box>
      <Navigation products={products} />
      <Container maxWidth="lg">
        <ProductsList products={products} />
      </Container>
    </Box>
  );
}

export async function getStaticProps(context) {
  const data = await prisma.product.findMany({
    include: {
      department: true,
    },
  });
  console.log(data["department"]);
  const products = data.map((product) => ({
    ...product,
    productRating: product.productRating.toString(),
  }));

  return {
    props: { products },
  };
}
