// import fs from "fs";
import { faker } from "@faker-js/faker";

// 22 departments from Faker commerce
const departments = [];

function createDepartments() {
  // !Commerce departments
  var loopCount = 0;

  while (departments.length < 22) {
    let department = faker.commerce.department();
    var randomBugdget = (Math.random() * 2000000).toFixed(2);
    if (!departments.includes(department)) {
      var Department = {
        name: department,
        description: `The ${department} Department`,
        budget: randomBugdget.toString(),
      };
      departments.push(Department);
    }
    loopCount += 1;
  }
  // console.log("Looped through", loopCount, "times");
  // console.log(departments);
  return departments;
}

// each department will have 15 products
const products = [];

function createProducts() {
  const promotionalAddOn = [
    "💸Bestseller",
    "💨Just In",
    "🏬Available in a store near you",
    "🔷Available in Artic Sea Blue ",
    "🛃Customizable",
    "📉Lowest Price Online",
    "📦Free Shipping",
    "🚀Comes with Bonus Gift",
    "⬅️Similar to your recents",
    "📈Trending",
    "🎁Most gifted",
    "👀Most Watched",
    "🕴️Limited Edition",
    "📊Premium Value",
    "⌛Coming Soon",
  ];

  for (let i = 0; i < departments.length; i++) {
    var Product = {};
    var currentDepartment = departments[i].name;
    for (let j = 0; j < 10; j++) {
      var Uid = faker.datatype.uuid().split("-")[1];
      var name = faker.commerce.productName();
      var description = faker.commerce.productDescription();
      // var departmentName = currentDepartment;
      var image = faker.image.imageUrl(640, 480, `${currentDepartment}`);
      var department_id = i + 1;
      var randomAddOn = Math.floor(Math.random() * promotionalAddOn.length);
      var price = faker.commerce.price(37, 99, 0, "$");

      var promoPrice = faker.commerce.price(30, price.slice(1) - 2, 0, "$");

      var productRating = faker.datatype.float({
        min: 2.8,
        max: 5,
        precision: 0.1,
      });
      var promoAddOn = promotionalAddOn[randomAddOn];

      var Product = {
        Uid,
        name,
        description,
        price,
        promoPrice,
        promoAddOn,
        productRating,
        image,
        department_id,
        // departmentName,
      };
      // console.log("this is the product", Product);
      products.push(Product);
    }
  }
  return products;
}
// function createJSONdata(data){
//   try {
//   fs.writeFileSync("data.json", JSON.stringify(data), function (err) {
//     if (!err) {
//       console.log(
//         "Seeding data to data.json writting is complete! Have fun shopping ~!"
//       );
//     } else {
//       // else means there's error!
//       console.error(
//         "There was an error in the writting process itself. data.json IS NOT seeded properly... Try again!"
//       );
//     }
//   });
//   console.log(
//     "Seeding data to data.json writting is complete! Have fun shopping ~!"
//   );
// } catch (e) {
//   console.error(
//     e,
//     "There was a problem with writing/ finalizing the seeding process for each department 15 items (0-14)"
//   );
// }
// }

export default { createDepartments, createProducts };
