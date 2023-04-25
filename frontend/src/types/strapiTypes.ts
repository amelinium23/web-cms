import { Button, ImageData } from "./common";

export interface StrapiHeaderResponse {
  data: StrapiHeaderResponseData;
}

export interface StrapiHeaderResponseData {
  id: number;
  attributes: HeaderAttributes;
}

export interface HeaderAttributes {
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  message: null;
  buttons: Button[];
  logo: Logo;
}

export interface Logo {
  data: LogoData;
}

export interface LogoData {
  id: number;
  attributes: ImageData;
}

export interface HeaderAttributes {
  id: number;
  title: string;
  userText: string | null;
}
