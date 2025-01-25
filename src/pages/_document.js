import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="h-full" suppressHydrationWarning>
      <Head />
      <body className="flex min-h-full bg-white antialiased">
        <div className="w-full">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
}
