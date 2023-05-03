import { Button, Header, Input } from './common';

export interface StrapiRegisterPageResponse {
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
  inputs: Input[];
  button: Button;
}
