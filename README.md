## Cloudrive project
---
This project was about creating an SaaS project. As for now this was an creating an solution for storing files online and sharing them with just use of links.

This repo contains implementation of the design for Web interfaces and CMS on TUL. The designs was created on figma.

### Project stracture
There is two directories in *apps*:
- *cms* - this directory contains all of the strapi code
- *frontend* - this directory contains the all of the Next.js code using pages directory

To run with Turorepo:
```sh
sudo npm run dev
```

To run Strapi project:
```sh
cd cms
npm run dev
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