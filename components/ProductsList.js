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

  if (!products) {
    const PRODUCTS = Object.values(products);
    const randomProducts = [];
    for (let i = 0; i < PRODUCTS.length; i++) {
      randomProducts.push(PRODUCTS[i][0]);
    }

    // return (
    //   <ImageList col={4} gap={50}>
    //    {Object.entries()}
    //   </ImageList>
    // );
  } else {
    return <Typography mr={2}>Sorry could not find products..</Typography>;
  }
}
