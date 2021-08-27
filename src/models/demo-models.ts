import { PageProps } from 'gatsby';
import { MarkdownMetadata, SiteMetadata } from './seo-models';

export interface DemoPageProps extends PageProps {
  pageContext: {
    html: string;
    siteMetadata: SiteMetadata;
    markdownMetadata: MarkdownMetadata;
  };
}
