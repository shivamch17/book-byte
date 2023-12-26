"use server";
const { scrapeDataFast, getDownloadLink } = require("./scrapeDataFast.ts");
import { BookT } from "@/types";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function libgenScraper(title?: String) {
  try {
    const data = await scrapeDataFast(title, 50);
    await prisma.book.createMany({
      data: data,
      skipDuplicates: true,
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getDownloadLinks(url?: String) {
  try {
    const data = getDownloadLink(url);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getAllBooks() {
  const data = prisma.book.findMany();
  return data;
}
