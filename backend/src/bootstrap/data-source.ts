import "reflect-metadata";
import { DataSource } from "typeorm";
import { readFileSync } from "fs";
import { join } from "path";

// entity imports
import Entities from "@entity";

const ssl = {
  rejectUnauthorized: true,
  ca: readFileSync(join(__dirname, "certificate.crt")),
};
export const AppDataSource = new DataSource({
  type: "postgres",
  schema: "philly-assessments",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [...Object.values(Entities)],
  migrations: [],
  ssl: process.env.DB_SSLMODE === "true" ? ssl : false,
});
