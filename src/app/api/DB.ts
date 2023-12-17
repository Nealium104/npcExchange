import { NextApiRequest, NextApiResponse } from "next";

export default async function DB(req: NextApiRequest, res: NextApiResponse) {
  const mysql = require("mysql2");
  let connection = mysql.createConnection(process.env.DATABASE_URL);
  console.log("Connected to PlanetScale!");

  try {
    connection = await mysql.createConnection(process.env.DATABASE_URL);

    const [rows] = await connection.query("SELECT * FROM Posts");

    res.status(200).json(rows);
  } catch (error) {
    console.error("Database connection error:", error);
    res.status(500).json({ message: "internal server error" });
  }
}
