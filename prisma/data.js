// const { Prisma } = require("@prisma/client");
import { faker } from "@faker-js/faker";
import fs from "fs";
// 22 departments from Faker commerce
const departments = [];

function createDepartments() {
  // !Commerce departments
  var loopCount = 0;
  while (departments.length < 22) {
    let department = faker.commerce.department();
    if (!departments.includes(department)) {
      departments.push(department);
    }
    loopCount += 1;
  }
}

const products = [];
// each department will have 15 products
function createFakerProducts() {
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
  for (let i = 0; i < departments.length; i++) {
    var Product = {};
    for (let j = 0; j < 16; j++) {
      var productId = faker.datatype.uuid().split("-")[1];
      var productName = faker.commerce.productName();
      var productMaterial = productName.split(" ")[1];
      var productPrice = faker.commerce.price(37, 99, 0, "$");
      var productPromoPrice = faker.commerce.price(
        30,
        productPrice.slice(1) - 2,
        0,
        "$"
      );

      var productDescription = faker.commerce.productDescription();
      var productDepartment = departments[i];

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
      productName = productName.split(" ")[2];
      if (!products.includes(productName)) {
        products.push(productName);
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
    console.log(
      "Seeding data to data.json writting is complete! Have fun shopping ~!"
    );
  } catch (e) {
    console.error(
      e,
      "There was a problem with writing/ finalizing the seeding process for each department 15 items (0-14)"
    );
  }
}

createDepartments();
createFakerProducts();

export default { createDepartments, createFakerProducts };
