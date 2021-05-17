import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { MarkdownMetadata, SiteMetadata } from '../models/seo-models';

interface IndexPageProps extends PageProps {
  pageContext: {
    html: string;
    siteMetadata: SiteMetadata;
    markdownMetadata: MarkdownMetadata;
  };
}

const IndexTemplate = (props: IndexPageProps) => {
  const { html, siteMetadata, markdownMetadata } = props.pageContext;
  const seoProps = { siteMetadata, ...markdownMetadata };
  return (
    <Layout>
      <SEO {...seoProps} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

export default IndexTemplate;
