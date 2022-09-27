import * as React from "react";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import Link from "@mui/material/Link";
export default function ProductsList({ products }) {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  if (products) {
    const PRODUCTS = Object.values(products);
    const randomProducts = [];
    for (let i = 0; i < PRODUCTS.length; i++) {
      randomProducts.push(PRODUCTS[i][0]);
    }

    return (
      <ImageList col={4} gap={50}>
        {Object.entries(randomProducts).map((product) => {
          const productNum = product[0];
          const item = product[1];
          const collectionPage = `/collections/${item.productDepartment}`;
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
                title={
                  <div>
                    <h1>{item.productName}</h1>
                    <Link
                      underline="hover"
                      key="1"
                      color="inherit"
                      href={collectionPage}
                    >
                      <ThemeProvider theme={theme}>
                        <Typography variant="h5">
                          Department: {item.productDepartment}
                        </Typography>
                      </ThemeProvider>
                    </Link>{" "}
                  </div>
                }
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
}
