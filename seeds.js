import { faker } from "@faker-js/faker";
import fs from "fs";

export default function createRandomProducts() {
  // !Commerce departments
  const departments = [];
  const products = {};
  const promotionalAddOn = [
    "Bestseller",
    "Just In",
    "Available in a store near you",
    "Available in Artic Sea Blue ",
    "Customizable",
    "Lowest Price Online",
    "Free Shipping",
    "Comes with Bonus Gift",
    "Similar to your recents",
    "Trending",
    "Most gifted",
    "Most Watched",
    "Limited Edition",
    "Premium Value",
    "Coming Soon",
  ];
  var productPromotionAddOn = Math.floor(
    Math.random() * promotionalAddOn.length
  );
  // console.log(
  //   productPromotionAddOn,
  //   "out of ",
  //   promotionalAddOn.length,
  //   "promo is: ",
  //   promotionalAddOn[productPromotionAddOn]
  // );

  for (let i = 0; i < 6; i++) {
    let department = faker.commerce.department();
    if (!departments.includes(department)) {
      departments.push(department);
    }
  }
  console.log(departments);
  //   for each department x 15 products (0-14)
  for (let i = 0; i < departments.length; i++) {
    var Product = {};
    for (let j = 0; j < 15; j++) {
      var productId = faker.datatype.uuid().split("-")[1];
      var productName = faker.commerce.productName();
      var productMaterial = productName.split(" ")[1];
      var productPrice = faker.commerce.price(5, 125, 0, "$");
      var productDescription = faker.commerce.productDescription();
      var productDepartment = departments[i];
      var productPromoPrice = faker.commerce.price(
        10,
        productPrice - 2,
        0,
        "$"
      );
      var productPromotionAddOn = promotionalAddOn[productPromotionAddOn];
      var productImg = faker.image.imageUrl(
        640,
        480,
        `${productName.split(" ")[2]}`
      );
      var productRating = faker.datatype.float({
        min: 2.8,
        max: 5,
        precision: 0.1,
      });
      var product = {
        productId,
        productName,
        productMaterial,
        productDepartment,
        productDescription,
        productPromotionAddOn,
        productPrice,
        productPromoPrice,
        productRating,
        productImg,
      };
      Product[j] = product;
    }
    products[departments[i]] = Product;
  }
  try {
    fs.writeFileSync("data.json", JSON.stringify(products), function (err) {
      if (!err) {
        console.log(
          "Seeding data to data.json writting is complete! Have fun shopping ~!"
        );
      } else {
        // else means there's error!
        console.error(
          "There was an error in the writting process itself. data.json IS NOT seeded properly... Try again!"
        );
      }
    });
  } catch (e) {
    console.error(
      e,
      "There was a problem with writing/ finalizing the seeding process for each department 15 items (0-14)"
    );
  }
}

createRandomProducts();
