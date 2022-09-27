import * as React from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

export default function collectionProducts({ products }) {
  const router = useRouter();
  const collectionName = router.route.split("/")[2];
  const departmentName = Object.keys(products).filter(
    (department) => department == collectionName
  )[0];

  return (
    <Box>
      <ImageList>
        {Object.entries(products[departmentName]).map((product) => {
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
                title={
                  <div>
                    <h1>{item.productName}</h1>
                    <h2>Department: {item.productDepartment}</h2>
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
    </Box>
  );
}
