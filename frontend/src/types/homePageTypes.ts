import { StaticImageData } from "next/image";
import { Button, StrapiMediaResponse, Tag } from "./common";
import { HeaderAttributes } from "./strapiTypes";

export interface StrapiHomPageResponse {
  data: StrapiHomePageResponseData;
}

export interface StrapiHomePageResponseData {
  id: number;
  attributes: HomePageAttributes;
}

export interface HomePageAttributes {
  createdAt: Date;
  updatedAt: Date;
  header: HeaderAttributes;
  content: Content[];
}

export interface Content {
  id: number;
  title: string;
  description: string;
  imageLeft: boolean;
  image: StrapiMediaResponse | StaticImageData;
  tags: Tag[];
  button: Button | null;
}
