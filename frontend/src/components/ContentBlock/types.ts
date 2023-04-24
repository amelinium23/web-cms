import { ReactNode } from "react";

export type ContentBlockProps = {
  title: string;
  description: string;
  imageLeft?: boolean;
  imageSrc: string;
  tags?: any[];
  children?: ReactNode;
};
