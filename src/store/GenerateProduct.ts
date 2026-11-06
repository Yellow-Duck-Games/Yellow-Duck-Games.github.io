import type { Product } from "./ProductType";

export const generateProduct = (
    id: string,
    title: string,
    basePath: string,
    iosLink: string,
    androidLink: string,
    screenshotCount: number = 3,
    webLink: string = ''
  ): Product => ({
    id,
    title,
    shortDescription: `${basePath}/short-description.txt`,
    longDescription: `${basePath}/long-description.txt`,
    privacyPolicy: `${basePath}/privacy-policy.txt`,
    termsOfService: `${basePath}/terms-of-service.txt`,
    thumbnail: `${basePath}/icon.png`,
    iosLink,
    androidLink,
    webLink,
    screenshots: Array.from(
      { length: screenshotCount },
      (_, i) => `${basePath}/screenshot-${i + 1}.png`
    ),
  });