import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

export type ContentBlockProps = {
  title: string;
  description: string;
  imageLeft?: boolean;
  imageSrc: string;
  tags?: Tag[];
  children?: ReactNode;
};

export type Tag = {
  name: string;
  id: number;
  backgroundColor: string;
  textColor: string;
  icon: StaticImageData;
};
