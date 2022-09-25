import * as React from "react";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

export default function ProductsList({ products }) {
  return (
    <ImageList cols={5} gap={20}>
      {products.map((product) => (
        <ImageListItem key={product.image}>
          {/* Product's image*/}
          <img
            src={`${product.image}?w=250&fit=crop&auto=format`}
            srcSet={`${product.image}?w=250&fit=crop&auto=format&dpr=2 2x`}
            alt={product.name}
            loading="lazy"
          />
          {/* Product's name + price under the image */}
          <ImageListItemBar
            title={product.name}
            subtitle={<span>Price: {product.price}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
