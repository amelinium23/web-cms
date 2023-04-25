import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { StrapiHomPageResponse } from "@/types";
import { content } from "./constants";

export const mapHomePage = (data: StrapiHomPageResponse) => {
  if (!data) return { content, header: { title: "Strona Główna" } };

  const { data: cmsData } = data;

  return {
    content: cmsData.attributes.content || content,
    header: cmsData.attributes.header || { header: { title: "Strona Główna" } },
  };
};

export const useHomePage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["header"],
    queryFn: () =>
      axios
        .get("http://localhost:1337/api/home-page?populate=deep")
        .then((res) => res.data),
  });

  if (isLoading) return null;

  return mapHomePage(data);
};
