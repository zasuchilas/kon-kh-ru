import React from 'react';
import { PageProps } from 'gatsby';
import { MarkdownMetadata, SiteMetadata } from '../models/seo-models';

interface IndexPageProps extends PageProps {
  pageContext: {
    html: string;
    siteMetadata: SiteMetadata;
    markdownMetadata: MarkdownMetadata;
  };
}

const IndexTemplate = (props: IndexPageProps) => {
  const { html } = props.pageContext;
  return (
    <div className="index-page" dangerouslySetInnerHTML={{ __html: html }} />
  );
};

export default IndexTemplate;
