"use server";
const { scrapeDataFast, getDownloadLink } = require("./scrapeDataFast.ts");

export async function libgenScraper(title?: String) {
  try {
    const data = await scrapeDataFast(title, 50);
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
