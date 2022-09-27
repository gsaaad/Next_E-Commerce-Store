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
  console.log("You're on page : ", departmentName);
  console.log(products[departmentName]);

  return (
    <Box>
      <Typography>Hello PRODUCTS</Typography>
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
    </Box>
  );

  // for (let i = 0; i < department.length; i++) {
  //   const departmentTitle = department[i][0];
  //   const departmentProducts = Object.values(department[i][1]);
  //   const PRODUCTS = departmentProducts;
  //   const collectionPRODUCTS = [];

  //   if (departmentTitle == collectionName) {
  //     Object.values(PRODUCTS).map((product) => {
  //       return (
  //         <Box>
  //           <Typography>Hello PRODUCTS</Typography>
  //         </Box>
  //       );
  //     });
  //   }
  // }

  // todo match collection name with department, then retrieve products that represent collection/department

  //   if (products) {
  //     const PRODUCTS = Object.values(products);
  //     const randomProducts = [];
  //     for (let i = 0; i < PRODUCTS.length; i++) {
  //       randomProducts.push(PRODUCTS[i][0]);
  //     }

  //     return (
  //       <ImageList col={4} gap={50}>
  //         {Object.entries(randomProducts).map((product) => {
  //           const productNum = product[0];
  //           const item = product[1];
  //           const lineThrough = {
  //             textDecoration: "line-through",
  //             marginLeft: "20px",
  //           };
  //           const priceDivStyling = {
  //             display: "flex",
  //           };

  //           return (
  //             <ImageListItem key={productNum}>
  //               <img
  //                 src={`${item.productImg}?w-250&fit=crop&auto=format`}
  //                 srcSet={`${item.productImg}?w=250&fit=crop&auto=format&dpr=2 2x`}
  //                 alt={item.productDescription}
  //                 loading="lazy"
  //               />
  //               <ImageListItemBar
  //                 title={<h1>{item.productName}</h1>}
  //                 subtitle={
  //                   <div style={priceDivStyling}>
  //                     <h1>{item.productPromoPrice}</h1>
  //                     <h1 style={lineThrough}>{item.productPrice}</h1>
  //                   </div>
  //                 }
  //                 position="below"
  //               />
  //             </ImageListItem>
  //           );
  //         })}
  //       </ImageList>
  //     );
  //   } else {
  //     console.log("PROBLEM");
  //   }
}
