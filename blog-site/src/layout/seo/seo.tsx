import Head from "next/head";
import { ISEOProps } from "./seo.props";
import { SEOConfigDefault } from "@/src/config/seo.config";

const SEOConfig = ({
  children,
  metaTitle = SEOConfigDefault.metaTitle,
  metaKeywords = SEOConfigDefault.metaKeywords,
  metaDescription = SEOConfigDefault.metaDescription,
  author = SEOConfigDefault.author,
}: ISEOProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <title>{metaTitle}</title>

        <meta httpEquiv="X-UA-Compatible" content="ie-edge" />
        <meta name="keyword" content={metaKeywords} />
        <meta name="author" content={author} />
        <meta name="description" content={metaDescription} />
        <link
          rel="shortcut icon"
          href={"/vercel-svgrepo-com.svg"}
          type="image/x-icon"
        />
      </Head>
      {children}
    </>
  );
};

export default SEOConfig;
