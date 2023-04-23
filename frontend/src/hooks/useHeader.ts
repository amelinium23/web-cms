import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const getHeaderData = async () => {
  return (await axios.get("http://127.0.0.1:1337/api/header")).data;
};

export const useHeader = () => {
  const { data, isError } = useQuery({
    queryKey: ["header"],
    queryFn: getHeaderData,
  });

  if (isError) return {};

  return data;
};
