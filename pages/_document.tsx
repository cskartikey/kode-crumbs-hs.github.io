import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <meta name="title" content="Kode Crumbs" />
      <meta name="description" content="Kode Crumbs is a place where high school students with a passion for technology come together to learn, create, and share their ideas." />
      <meta name="keywords" content="computer club, coding, kode crumbs" />
      <meta name="robots" content="index, follow"/>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="language" content="English"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
