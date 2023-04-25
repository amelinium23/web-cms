import { StrapiRegisterPageResponse } from "@/types/registerPageTypes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { button, header, inputs } from "./constants";

const defaultResponse = {
  inputs: inputs,
  button: button,
  header: header,
};

const mapRegisterPage = (data: StrapiRegisterPageResponse) => {
  if (!data) return defaultResponse;

  return {
    inputs: data.data.attributes.inputs || inputs,
    button: data.data.attributes.button || button,
    header: data.data.attributes.header || header,
  };
};

export const useRegisterPage = () => {
  const { data } = useQuery({
    queryKey: ["register"],
    queryFn: () =>
      axios
        .get("http://localhost:1337/api/register-page?populate=deep")
        .then((res) => res.data),
  });
  return mapRegisterPage(data);
};
