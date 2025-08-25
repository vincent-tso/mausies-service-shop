Hi,
I am Vincent and I will be outlining how this project, Mausies Service Shop, was built, how to set up the project, and how to run the application in the Development environment.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). [Resend] was used to distribute emails when an inquiry form has been submitted.

## Getting Started

Once the project has been downloaded, ensure that your Node.js version is up-to-date.

```bash
# 18.18 or later
node --version
```

Install or update Node.js if necessary.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Deploy on Vercel

This Next.js app has been deployed on the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme). You can find the link to the shop at (https://www.mausie.shop)

## TODO

- 3D model implementation on service page
- Modularise code
- Implement better folder structure for readability
- Implement unit-testing for pages using mocks
- Optional?: Implement auth for account creation
- Optional?: Implement db
