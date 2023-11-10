# Nicks NEXT js starter point

this is an opinionated starting point for next js using all of the library and directory structures that I personally love using


## Directory structure
- root - stores all the config files
  - public 
  - prisma  stores the layout of your database
  - src stores all code
    - app stores all page and api routes
      - api all api routes
        - auth this is where any auth related routes should go it is requred for next auth
    - components where react components should be stored
    - helpers where all helper functions should go
    - db this is where kysely generates the types and engine required to use the system this will be generated when you run prisma generate or prisma migrate dev


## Library's and tools
- Typescript adds types to javascript if you only use one thing from this project use typescript [docs](https://www.typescriptlang.org/docs/)
- NEXT js a meta full stack framework for react [docs](https://nextjs.org/docs)
- React a component baced way to create reactive websites [docs](https://react.dev/learn)
- Kysely - a type safe sql query generator [docs](https://kysely.dev/)
- Next auth - a library for handling oauth [docs](https://next-auth.js.org/getting-started/introduction)
- Tailwind - a library for styling components using a handful of css base classes [docs](https://tailwindcss.com/docs/utility-first)
- Prisma - prisma is normally an orm however because we are using kysley it's not recommend to use it for its intended use. instead prisma is used to define the layout of our database and generate types for kysley to use in query's [prisma-kysly github](https://github.com/valtyr/prisma-kysely)

## Infrastructure for bigger projects
- Golang next js api routes can only do simple stateless things like read and write to db. so if you need to do anything more complex golang is recommended because its really simple and has great tools for webservers [docs](https://go.dev/doc/)
- Vercel is probably the best way to host your app cause it is so simple to use point it to a Github repo and it just works with any next app. [docs](https://vercel.com/docs)
- Terraform a way to write your cloud architecture as code I like this cause it makes architecture self documenting however it is hard to setup and a little dicey to manage only recommended for big projects [docs](https://developer.hashicorp.com/terraform/docs)
- For a database I would recommend Turso or Planetscale or just sqlite. what ever you pick use prisma to manage the structure and find some way to document it
