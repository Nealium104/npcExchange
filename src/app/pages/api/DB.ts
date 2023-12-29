import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/prismaClient"; // Adjust the path as necessary

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const posts = await prisma.post.findMany(); // Adjust based on your schema
    res.status(200).json(posts);
  } catch (error) {
    console.error("Database connection error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
