import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { StrapiHeaderResponse } from "@/types";
import { logo } from "@/assets";
import { buttons } from "./constants";

const url = process.env.NEXT_PUBLIC_CMS_URL || "http://localhost:1337/api/";

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
      axios.get(`${url}header?populate=deep`).then((res) => res.data),
  });

  return mapHeader(data);
};
