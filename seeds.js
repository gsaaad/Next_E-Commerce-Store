import { faker } from "@faker-js/faker";

export default function createRandomProducts() {
  // !Commerce departments
  const departments = [];
  const products = {};
  for (let i = 0; i < 6; i++) {
    let department = faker.commerce.department();
    if (!departments.includes(department)) {
      departments.push(department);
    }
  }
  console.log(departments);
  //   for each department x 15 products
  for (let i = 0; i < departments.length; i++) {
    var Product = {};
    for (let j = 0; j < 15; j++) {
      var productId = faker.datatype.uuid().split("-")[1];
      var productName = faker.commerce.productName();
      var productMaterial = productName.split(" ")[1];
      var productPrice = faker.commerce.price(5, 125, 0, "$");
      var productDescription = faker.commerce.productDescription();
      var productDepartment = departments[i];
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
        productPrice,
        productRating,
        productImg,
      };
      Product[j] = product;
    }
    products[departments[i]] = Product;
  }
  return products;
}

createRandomProducts();
