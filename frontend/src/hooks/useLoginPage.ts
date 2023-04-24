import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const useLoginPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["header"],
    queryFn: () =>
      axios
        .get("http://localhost:1337/api/login-page?populate=deep")
        .then((res) => res.data),
  });

  if (isLoading) return { data: null, isLoading: true };

  return { data: data.attributes, isLoading };
};
