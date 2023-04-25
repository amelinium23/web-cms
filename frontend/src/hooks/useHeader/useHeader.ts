import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { StrapiHeaderResponse } from "@/types";
import { logo } from "@/assets";
import { buttons } from "./constants";

export const mapHeader = (data: StrapiHeaderResponse) => {
  if (!data) return { logo, buttons, message: "Cześć, Jacek!" };
  const { data: cmsData } = data;

  return {
    logo: logo,
    buttons: cmsData.attributes.buttons || buttons,
    message: cmsData.attributes.message || "Cześć, Jacek!",
  };
};

export const useHeader = () => {
  const { data } = useQuery({
    queryKey: ["header"],
    queryFn: () =>
      axios
        .get("http://localhost:1337/api/header?populate=deep")
        .then((res) => res.data),
  });

  return mapHeader(data);
};
