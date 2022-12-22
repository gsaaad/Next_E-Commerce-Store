import { PrismaClient } from "@prisma/client";
import createData from "./data.js";

// data
const departments = createData.createDepartments();
const products = createData.createProducts();

// prisma client

const prisma = new PrismaClient();

const loadData = async () => {
  try {
    await prisma.departments.deleteMany();
    console.log("Deleted records in Departments Table");
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};
