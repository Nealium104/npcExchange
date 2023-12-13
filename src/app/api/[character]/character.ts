require("dotenv").config();
const mysql = require("mysql2");
const connection = mysql.createConnection(process.env.DATABASE_URL);
console.log("Connected to PlanetScale!");
connection.end();

export function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const {} = data;
  }
}
