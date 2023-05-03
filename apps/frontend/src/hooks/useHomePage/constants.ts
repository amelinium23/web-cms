import {
  fifthContentBlock,
  firstContentBlock,
  fourthContentBlock,
  secondContentBlock,
  thirdContentBlock,
  checkMark,
} from "@/assets";

export const content = [
  {
    id: 3,
    title: "Bezpiecznie przechowuj swoje pliki już dziś!",
    description:
      "Dzięki **Cloudrive** możesz mieć swobodny dostęp do swoich plików z każdego miejsca na świecie!",
    imageLeft: false,
    image: firstContentBlock,
    tags: [
      {
        id: 6,
        name: "Muzyka",
        backgroundColor: "#055F94",
        textColor: "#E6EFF4",
        icon: checkMark,
      },
      {
        id: 7,
        name: "Dokumenty",
        backgroundColor: "#055F94",
        textColor: "#E6EFF4",
        icon: checkMark,
      },
      {
        id: 8,
        name: "Filmy",
        backgroundColor: "#055F94",
        textColor: "#E6EFF4",
        icon: checkMark,
      },
      {
        id: 9,
        name: "Wiele innych",
        backgroundColor: "#055F94",
        textColor: "#E6EFF4",
        icon: checkMark,
      },
    ],
    button: {
      id: 6,
      content: "Czytaj dalej",
      hoverColor: null,
      backgroundColor: "white",
      textColor: "#055F94",
      link: "/",
    },
  },
  {
    id: 4,
    title: "Gdziekolwiek potrzebujesz",
    description:
      "Dostęp do dysku w Cloudrive masz z każdego miejsca na świecie! Wystarczy dostęp do internetu.",
    imageLeft: true,
    image: secondContentBlock,
    tags: [
      {
        id: 10,
        name: "Telefon",
        backgroundColor: "#F4E7CC",
        textColor: "#A26D02",
        icon: checkMark,
      },
      {
        id: 11,
        name: "Komputer",
        backgroundColor: "#F4E7CC",
        textColor: "#A26D02",
        icon: checkMark,
      },
      {
        id: 12,
        name: "Tablet",
        backgroundColor: "#F4E7CC",
        textColor: "#A26D02",
        icon: checkMark,
      },
    ],
    button: null,
  },
  {
    id: 5,
    title: "Cenimy bezpieczeństwo",
    description:
      "Twoje pliki są bezpieczne w Cloudrive dzięki zastosowaniu najnowszych technologii",
    imageLeft: false,
    image: thirdContentBlock,
    tags: [],
    button: null,
  },
  {
    id: 6,
    title: "Gwarancja zadowolenia",
    description:
      "Nasz wszechstronny system spełni oczekiwania każdego użytkownika. Już dzisiaj załóż konto i przekonaj się sam.",
    imageLeft: true,
    image: fourthContentBlock,
    tags: [
      {
        id: 13,
        name: "Udostępniamy",
        backgroundColor: "#28666E",
        textColor: "#EAF0F1",
        icon: checkMark,
      },
      {
        id: 14,
        name: "Przechowywanie",
        backgroundColor: "#28666E",
        textColor: "#EAF0F1",
        icon: checkMark,
      },
      {
        id: 15,
        name: "Edycja",
        backgroundColor: "#28666E",
        textColor: "#EAF0F1",
        icon: checkMark,
      },
    ],
    button: null,
  },
  {
    id: 7,
    title: "Prywatność",
    description:
      "Tylko Ty masz władzę nad tym, kto widzi Twoje pliki i zasoby. W każdej chwili możesz zdecydować kto ma dostęp do Twojego dysku.",
    imageLeft: false,
    image: fifthContentBlock,
    tags: [
      {
        id: 16,
        name: "Przechowywanie",
        backgroundColor: "#E6EEE6",
        textColor: "#005108",
        icon: checkMark,
      },
      {
        id: 17,
        name: "Edycja",
        backgroundColor: "#E6EEE6",
        textColor: "#005108",
        icon: checkMark,
      },
    ],
  },
];
