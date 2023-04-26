import { useQuery } from "@tanstack/react-query";
import {
  buttons,
  header,
  input,
  integrations,
  prices,
  sidebar,
} from "./constants";
import axios from "axios";
import { StrapiSettingsPageResponse } from "@/types/settingsPageTypes";

const defaultSettingsPageData = {
  input: input,
  header: header,
  buttons: buttons,
  integrations: integrations,
  prices: prices,
  sidebar: sidebar,
};

const url = process.env.NEXT_PUBLIC_CMS_URL || "http://localhost:1337/api/";

const mapSettingsPage = (settingsPageData: StrapiSettingsPageResponse) => {
  if (!settingsPageData) return defaultSettingsPageData;
  const { data } = settingsPageData;

  return {
    input: data.attributes.integrations.input || input,
    header: data.attributes.header || header,
    buttons: data.attributes.sidebar.buttons || buttons,
    integrations: integrations,
    prices: data.attributes.prices || prices,
    sidebar: data.attributes.sidebar || sidebar,
  };
};

export const useSettingsPage = () => {
  const { data } = useQuery({
    queryKey: ["settingsPage"],
    queryFn: () =>
      axios.get(`${url}settings-page?populate=deep`).then((res) => res.data),
  });

  return mapSettingsPage(data);
};
