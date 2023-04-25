import { Button, Header, Input } from "./common";

export interface StrapiSettingsPageResponse {
  data: Data;
}

export interface Data {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  header: Header;
  sidebar: Sidebar;
  prices: Price[];
  integrations: Integrations;
}

export interface Integrations {
  id: number;
  title: string;
  enabledIntegrations: EdIntegration[];
  proposedIntegrations: EdIntegration[];
  input: Input;
}

export interface EdIntegration {
  name: string;
}

export interface Price {
  id: number;
  name: string;
  isChoosed: boolean;
  features: Feature[];
}

export interface Feature {
  id: number;
  feature: string;
  isAvailable: boolean;
}

export interface Sidebar {
  id: number;
  buttons: Button[];
  header: Header;
}
