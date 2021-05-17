import React from 'react';
import { Helmet } from 'react-helmet';
import { Image, Meta, SiteMetadata } from '../models/seo-models';

type SEOProps = {
  siteMetadata: SiteMetadata;
  lang?: string;
  title: string;
  description?: string;
  slug?: string;
  author?: string;
  keywords?: string;
  meta?: Array<Meta>;
  image?: Image;
};

const SEO = ({
  siteMetadata,
  lang = `ru`,
  title,
  description = '',
  slug,
  author,
  keywords,
  meta = [],
  image: metaImage,
}: SEOProps) => {
  const metaDescription = description || siteMetadata.description;
  const metaAuthor = author || siteMetadata.author;
  const metaKeywords = [keywords, siteMetadata.keywords].join(', ');
  const image =
    metaImage && metaImage.src ? `${siteMetadata.url}${metaImage.src}` : null;
  const canonical = slug ? `${siteMetadata.url}${slug}` : null;

  const metaTextData: Array<Meta> = [
    { name: `description`, content: metaDescription },
    {
      name: `keywords`,
      content: metaKeywords,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:creator`,
      content: metaAuthor,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ];
  const metaImageData: Array<Meta> = metaImage
    ? [
        {
          property: 'og:image',
          content: image,
        },
        {
          property: 'og:image:width',
          content: metaImage.width,
        },
        {
          property: 'og:image:height',
          content: metaImage.height,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ]
    : [
        {
          name: 'twitter:card',
          content: 'summary',
        },
      ];
  const metaBundle = metaTextData.concat(metaImageData).concat(meta);

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s - ${siteMetadata.title}`}
      link={
        canonical
          ? [
              {
                rel: 'canonical',
                href: canonical,
              },
            ]
          : []
      }
      // @ts-ignore HelmetProps
      meta={metaBundle}
    />
  );
};

export default SEO;
