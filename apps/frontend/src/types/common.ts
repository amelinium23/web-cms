import { StaticImageData } from 'next/image';

export interface StrapiMediaResponse {
  data: ImageData;
}

export interface ImageData {
  id: number;
  attributes: ImageAttributes;
}

export interface ImageAttributes {
  name: string;
  alternativeText: null | string;
  caption: null | string;
  width: number;
  height: number;
  formats: Formats | null;
  hash: string;
  ext: '.png' | '.svg';
  size: number;
  url: string;
  previewUrl: null;
  provider: 'local';
  provider_metadata: null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Formats {
  thumbnail: Thumbnail;
}

export interface Thumbnail {
  ext: '.png' | '.svg';
  url: string;
  hash: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
}

export interface Button {
  id: number;
  content: string;
  hoverColor: string | null;
  backgroundColor: string;
  textColor: string;
  link: string | null;
}

export interface Tag {
  id: number;
  name: string;
  backgroundColor: string;
  textColor: string;
  icon: StaticImageData;
}

export interface Input {
  id: number;
  label: string;
  placeholder: string;
  backgroundColor: string | null;
  hoverBackgroundColor: string | null;
  type: string;
}

export interface Header {
  id: number;
  title: string;
  userText: string | null;
}
