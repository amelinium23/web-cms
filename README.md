## Cloudrive project
---
This project is implementation of the design for Web interfaces and CMS on TUL. The designs was created on figma.

### Project stracture
There is two directories:
- *cms* - this directory contains all of the strapi code
- *frontend* - this directory contains the all of the Next.js code using pages directory

To run Strapi project:
```sh
cd cms
yarn develop
```

To run Next.js app:
```sh
cd frontend
npm run dev
```

---
### Technology
This project uses:
- [*Strapi*](https://strapi.io/) (our cms) with:
  - strapi-populate-deep
  - strapi-i18n
- [*Next.js*](https://nextjs.org/) with:
  - [Tailwindcss](https://tailwindcss.com/) - superset of CSS classes to create responsive designs
  - [Tanstack query](https://tanstack.com/query/latest) - library for creating queries to Strapi api
  - [axios](https://github.com/axios/axios) - library for fetching methods from cms
  - [react-markdown](https://github.com/remarkjs/react-markdown#readme) - react component for parsing rich text that comes from CMS

---