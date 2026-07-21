import type { Product } from "./ProductType";

export const generateProduct = (
    id: string,
    title: string,
    basePath: string,
    iosLink: string,
    androidLink: string,
    screenshotCount: number = 3
  ): Product => ({
    id,
    title,
    shortDescription: `${basePath}/short-description.txt`,
    longDescription: `${basePath}/long-description.txt`,
    privacyPolicy: `${basePath}/privacy-policy.txt`,
    thumbnail: `${basePath}/icon.png`,
    iosLink,
    androidLink,
    screenshots: Array.from(
      { length: screenshotCount },
      (_, i) => `${basePath}/screenshot-${i + 1}.png`
    ),
  });