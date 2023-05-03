import { HTMLAttributes } from "react";

export type InputProps = {
  label: string;
  type: string;
} & HTMLAttributes<HTMLInputElement>;
