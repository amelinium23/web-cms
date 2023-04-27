import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { StrapiHomPageResponse } from "@/types";
import { content } from "./constants";

const url = process.env.NEXT_PUBLIC_CMS_URL || "http://localhost:1337/api/";

export const mapHomePage = (data: StrapiHomPageResponse) => {
  if (!data) return { content, header: { title: "CloudDrive" } };

  const { data: cmsData } = data;

  return {
    content: cmsData.attributes.content || content,
    header: cmsData.attributes.header || { header: { title: "CloudDrive" } },
  };
};

export const useHomePage = () => {
  const { data } = useQuery({
    queryKey: ["home-page"],
    queryFn: () =>
      axios.get(`${url}home-page?populate=deep`).then((res) => res.data),
  });

  return mapHomePage(data);
};
