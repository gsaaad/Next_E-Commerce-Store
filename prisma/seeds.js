import { PrismaClient } from "@prisma/client";
import createData from "./data.js";

// data
const departments = createData.createDepartments();
const products = createData.createProducts();

// console.log(departments);

// prisma client

const prisma = new PrismaClient();

const loadData = async () => {
  try {
    await prisma.department.deleteMany();
    console.log("Deleted records in Departments Table");

    await prisma.product.deleteMany();
    console.log("Deleted records in Products Table");

    await prisma.$queryRaw`ALTER TABLE Product AUTO_INCREMENT = 1`;
    await prisma.$queryRaw`ALTER TABLE Department AUTO_INCREMENT = 1`;

    await prisma.department.createMany({
      data: departments,
    });
    console.log("Added departments data");

    await prisma.product.createMany({
      data: products,
    });
    console.log("Added Products data");
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    // disconnect from prisma connection
    await prisma.$disconnect();
  }
};

loadData();
