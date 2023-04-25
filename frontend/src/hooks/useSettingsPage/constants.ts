export const buttons = [
  {
    id: 12,
    content: "Moje pliki",
    hoverColor: null,
    backgroundColor: "white",
    textColor: "#699FBF",
    link: null,
  },
  {
    id: 11,
    content: "Udostępnione dla mnie",
    hoverColor: null,
    backgroundColor: "white",
    textColor: "#699FBF",
    link: null,
  },
  {
    id: 14,
    content: "Dodaj pliki",
    hoverColor: "#055F94",
    backgroundColor: "white",
    textColor: "#055F94",
    link: null,
  },
  {
    id: 13,
    content: "Kup miejsce",
    hoverColor: null,
    backgroundColor: "white",
    textColor: "#055F94",
    link: null,
  },
];

export const input = {
  id: 7,
  label: "Wyszukaj integracje",
  placeholder: "Wyszukaj integracje",
  backgroundColor: null,
  hoverBackgroundColor: null,
  type: "text",
};

export const header = {
  id: 5,
  title: "Ustawienia",
  userText: "Cześć, Jacek!",
};

export const proposedIntegrations = [
  {
    name: "Dropbox",
  },
  {
    name: "WeTransfer",
  },
  {
    name: "Lumio",
  },
  {
    name: "Google Forms",
  },
  {
    name: "Google Maps",
  },
];

export const integrations = {
  id: 1,
  title: "Integracje",
  enabledIntegrations: [
    {
      name: "Google Docs",
    },
    {
      name: "Google Sheets",
    },
    {
      name: "Google Slides",
    },
  ],
  proposedIntegrations: [
    {
      name: "Dropbox",
    },
    {
      name: "WeTransfer",
    },
    {
      name: "Lumio",
    },
    {
      name: "Google Forms",
    },
    {
      name: "Google Maps",
    },
  ],
  input: {
    id: 7,
    label: "Wyszukaj integracje",
    placeholder: "Wyszukaj integracje",
    backgroundColor: null,
    hoverBackgroundColor: null,
    type: "text",
  },
};

export const prices = [
  {
    id: 1,
    name: "Pakiet Zero",
    isChoosed: true,
    backgroundColor: "#E6EEE6",
    textColor: "#004106",
    features: [
      {
        id: 1,
        feature: "Darmowe 5 GB dostępnego miejsca",
        isAvailable: true,
      },
      {
        id: 2,
        feature: "Udostępnianie linków znajomym",
        isAvailable: true,
      },
      {
        id: 3,
        feature: "Tworzenie workspaces",
        isAvailable: false,
      },
      {
        id: 4,
        feature: "Asystent AI",
        isAvailable: false,
      },
    ],
  },
  {
    id: 2,
    name: "Pakiet Premium",
    isChoosed: false,
    backgroundColor: "#9BBFD4",
    textColor: "#033959",
    features: [
      {
        id: 5,
        feature: "Darmowe 5 GB dostępnego miejsca",
        isAvailable: true,
      },
      {
        id: 6,
        feature: "Udostępnianie linków znajomym",
        isAvailable: true,
      },
      {
        id: 7,
        feature: "Tworzenie workspaces",
        isAvailable: true,
      },
      {
        id: 8,
        feature: "Asystent AI",
        isAvailable: false,
      },
    ],
  },
  {
    id: 3,
    name: "Pakiet Pro",
    isChoosed: false,
    backgroundColor: "#28666E",
    textColor: "#CCEDFF",
    features: [
      {
        id: 9,
        feature: "Darmowe 5 GB dostępnego miejsca",
        isAvailable: true,
      },
      {
        id: 10,
        feature: "Udostępnianie linków znajomym",
        isAvailable: true,
      },
      {
        id: 11,
        feature: "Tworzenie workspaces",
        isAvailable: true,
      },
      {
        id: 12,
        feature: "Asystent AI",
        isAvailable: true,
      },
    ],
  },
];

export const sidebar = {
  id: 1,
  buttons: [
    {
      id: 12,
      content: "Moje pliki",
      hoverColor: null,
      backgroundColor: "white",
      textColor: "#699FBF",
      link: null,
    },
    {
      id: 11,
      content: "Udostępnione dla mnie",
      hoverColor: null,
      backgroundColor: "white",
      textColor: "#699FBF",
      link: null,
    },
    {
      id: 13,
      content: "Kup miejsce",
      hoverColor: null,
      backgroundColor: "white",
      textColor: "#055F94",
      link: null,
    },
  ],
  header: {
    id: 6,
    title: "Wykorzystano 2.5 z 5 GB",
    userText: null,
  },
};
