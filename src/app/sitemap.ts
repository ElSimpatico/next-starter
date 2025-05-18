import type { MetadataRoute } from "next";
import { LOCALES } from "@/i18n/locales";
import { Routes } from "@/constants/Routes";

import { getProducts } from "@routes/products/_utils";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

type SitemapEntry = MetadataRoute.Sitemap[number];

async function getProductsId(): Promise<string[]> {
  const products = await getProducts();
  return (products ?? []).map((product) => product.id);
}

function buildAlternates(route: string): SitemapEntry["alternates"] {
  const languagesLink = LOCALES.reduce((accum, current) => {
    return {
      ...accum,
      [current]: `${baseUrl}/${current}${route}`,
    };
  }, {});

  return {
    languages: languagesLink,
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const productsId = await getProductsId();

  const entries: SitemapEntry[] = [];

  // build root pages
  const alternatesRoot = buildAlternates(Routes.ROOT);
  entries.push({
    url: `${baseUrl}${Routes.ROOT}`,
    lastModified: new Date(),
    alternates: alternatesRoot,
  });

  // build root products page
  const alternatesProducts = buildAlternates(Routes.PRODUCTS);
  entries.push({
    url: `${baseUrl}${Routes.PRODUCTS}`,
    lastModified: new Date(),
    alternates: alternatesProducts,
  });

  // build root product detail page
  productsId.forEach((id) => {
    const route = Routes.PRODUCT_DETAIL.replace("[id]", id);
    const alternatesProductDetail = buildAlternates(route);
    entries.push({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      alternates: alternatesProductDetail,
    });
  });

  return entries;
}
