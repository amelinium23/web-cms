export type Feature = {
  feature: string;
  isAvailable: boolean;
};

export type PriceItemProps = {
  title: string;
  features: Feature[];
  children?: React.ReactNode;
};
