import * as React from "react";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

export default function ProductsList({ products }) {
  const DEPARTMENTS = Object.keys(products);
  const PRODUCTS = Object.values(products);
  console.log(PRODUCTS);

  return (
    <ImageList col={5} gap={20}>
      {/* {
        (products,
        Object.entries(products).forEach((department) => {
          const departmentTitle = department[0];
          const departmentProducts = department[1];
          const randomProduct = Object.values(departmentProducts)[2];

          <ImageListItem key={department[0]}>
            <div>Department: {departmentTitle}</div>
            <img
              src={`${randomProduct.productImg}?w=250&fit=crop&auto=format&dpr=2`}
            />
          </ImageListItem>;
        }))
      } */}
      {Object.entries(DEPARTMENTS).map((department) => {
        const departmentId = department[0];
        const departmentTitle = department[1];

        return (
          <ImageListItem key={departmentId}>
            <div>Hello {departmentTitle}</div>
          </ImageListItem>
        );
      })}
    </ImageList>
  );
}
