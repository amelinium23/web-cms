import { useQuery } from "@tanstack/react-query";
import {
  buttons,
  header,
  input,
  prices,
  proposedIntegrations,
  sidebar,
} from "./constants";
import axios from "axios";
import { StrapiSettingsPageResponse } from "@/types/settingsPageTypes";

const defaultSettingsPageData = {
  input: input,
  header: header,
  buttons: buttons,
  proposedIntegrations: proposedIntegrations,
  prices: prices,
  sidebar: sidebar,
};

const mapSettingsPage = (settingsPageData: StrapiSettingsPageResponse) => {
  if (!settingsPageData) return defaultSettingsPageData;
  const { data } = settingsPageData;

  return {
    input: data.attributes.integrations.input || input,
    header: data.attributes.header || header,
    buttons: data.attributes.sidebar.buttons || buttons,
    proposedIntegrations:
      data.attributes.integrations.proposedIntegrations || proposedIntegrations,
    prices: data.attributes.prices || prices,
    sidebar: data.attributes.sidebar || sidebar,
  };
};

export const useSettingsPage = () => {
  const { data } = useQuery({
    queryKey: ["settingsPage"],
    queryFn: () =>
      axios
        .get("http://localhost:1337/api/settings-page?populate=deep")
        .then((res) => res.data),
  });

  return mapSettingsPage(data);
};
