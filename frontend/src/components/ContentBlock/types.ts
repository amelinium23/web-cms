import { ReactNode } from "react";

export type ContentBlockProps = {
  title: string;
  description: string;
  imageLeft?: boolean;
  tiles?: any[];
  children?: ReactNode;
};
