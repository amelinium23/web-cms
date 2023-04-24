import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const useHomePage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["header"],
    queryFn: () =>
      axios
        .get("http://localhost:1337/api/home-page?populate=deep")
        .then((res) => res.data),
  });

  if (isLoading) return null;

  return { data: data.data.attributes };
};
