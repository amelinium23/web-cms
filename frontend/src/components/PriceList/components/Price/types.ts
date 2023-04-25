import { ReactNode } from "react";

export type Feature = {
  feature: string;
  isAvailable: boolean;
};

export type PriceItemProps = {
  title: string;
  features: Feature[];
  backgroundColor?: `#${string}`;
  textColor?: `#${string}`;
  children?: ReactNode;
};
