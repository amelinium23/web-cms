import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { StrapiLoginPageResponse } from "@/types/loginPage";
import { buttons, header, inputs } from "./constants";

export const mapLoginPage = (data: StrapiLoginPageResponse) => {
  const { data: cmsData } = data;

  return {
    header: cmsData.attributes.header || header,
    inputs: cmsData.attributes.inputs || inputs,
    buttons: cmsData.attributes.buttons || buttons,
  };
};

export const useLoginPage = () => {
  const { data } = useQuery({
    queryKey: ["login"],
    queryFn: () =>
      axios
        .get("http://localhost:1337/api/login-page?populate=deep")
        .then((res) => res.data),
  });

  return mapLoginPage(data);
};