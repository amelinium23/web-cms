import { ReactNode } from "react";

export type Integration = { name: string; icon?: ReactNode };

export type IntegrationProps = {
  integration: Integration;
};
