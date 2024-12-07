// import { AppDataSource } from "./data-source";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const connectDB = async () => {
  // try {
  //   const response = await AppDataSource.initialize();

  //   console.log("Database connected");

  //   return response;
  // } catch (error: any) {
  //   console.error(`Error in database connection: ${error.message}`);
  //   process.exit(1);
  // }

  try {
    await prisma.$connect();
    console.log("Connected to the database successfully!");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  } finally {
    await prisma.$disconnect();
  }
};

export default connectDB;
