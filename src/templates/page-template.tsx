import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { MarkdownMetadata, SiteMetadata } from '../models/seo-models';
import { Link } from 'gatsby';

interface IndexPageProps extends PageProps {
  pageContext: {
    html: string;
    siteMetadata: SiteMetadata;
    markdownMetadata: MarkdownMetadata;
  };
}

const PageTemplate = (props: IndexPageProps) => {
  const { html, siteMetadata, markdownMetadata } = props.pageContext;
  const seoProps = { siteMetadata, ...markdownMetadata };
  const bread = ` / ${markdownMetadata.title}`;
  return (
    <Layout short={true}>
      <SEO {...seoProps} />
      <div className="bread">
        <Link to="/">kon-kh.ru</Link>
        {bread}
      </div>
      <div
        className="article-page"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  );
};

export default PageTemplate;
