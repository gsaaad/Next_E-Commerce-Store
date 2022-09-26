import * as React from "react";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

export default function ProductsList({ products }) {
  const PRODUCTS = Object.values(products);
  const randomProducts = [];
  for (let i = 0; i < PRODUCTS.length; i++) {
    randomProducts.push(PRODUCTS[i][0]);
  }
  console.log(randomProducts);

  return (
    <ImageList col={4} gap={50}>
      {Object.entries(randomProducts).map((product) => {
        const productNum = product[0];
        const item = product[1];
        const lineThrough = {
          textDecoration: "line-through",
          marginLeft: "20px",
        };
        const priceDivStyling = {
          display: "flex",
        };

        return (
          <ImageListItem key={productNum}>
            <img
              src={`${item.productImg}?w-250&fit=crop&auto=format`}
              srcSet={`${item.productImg}?w=250&fit=crop&auto=format&dpr=2 2x`}
              alt={item.productDescription}
              loading="lazy"
            />
            <ImageListItemBar
              title={<h1>{item.productName}</h1>}
              subtitle={
                <div style={priceDivStyling}>
                  <h1>{item.productPromoPrice}</h1>
                  <h1 style={lineThrough}>{item.productPrice}</h1>
                </div>
              }
              position="below"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
}
