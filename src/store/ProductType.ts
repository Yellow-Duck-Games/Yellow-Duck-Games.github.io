export interface Product {
    id: string;
    title: string;
    shortDescription: string;
    longDescription: string;
    iosLink: string;
    androidLink: string;
    webLink?: string;
    privacyPolicy: string;
    thumbnail: string;
    screenshots: string[];
  }