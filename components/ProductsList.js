import * as React from "react";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Container from "@mui/material/Container";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export default function ProductsList({ products }) {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  if (products) {
    var sampleProducts = products.slice(0, 14);
    console.log(sampleProducts.length);

    return (
      <ImageList sx={{ width: 600, height: 600 }} cols={3} rowHeight={10}>
        {sampleProducts.map((product) => {
          {
            /* console.log(product.image), */
          }
          <ImageListItem key={product.id}>
            <img
              src={`${product.image}`}
              srcSet={`${product.image}`}
              alt={product.name}
              loading="lazy"
            />
            <Typography mr={2}>{product.name}</Typography>
          </ImageListItem>;
        })}
      </ImageList>
    );
  } else {
    return (
      <Container>
        <Typography mr={2}>Sorry could not find products..</Typography>
      </Container>
    );
  }
}
