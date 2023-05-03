import { Button, Input } from "./common";
import { HeaderAttributes } from "./strapiTypes";

export interface StrapiLoginPageResponse {
  data: Data;
}

export interface Data {
  id: number;
  attributes: LoginPageAttributes;
}

export interface LoginPageAttributes {
  createdAt: Date;
  updatedAt: Date;
  header: HeaderAttributes;
  inputs: Input[];
  buttons: Button[];
}
