import React from 'react';
import { PageProps } from 'gatsby';

interface IndexPageProps extends PageProps {
  pageContext: {
    html: string;
    date: string;
    slug: string;
    title: string;
  };
}

const IndexTemplate = (props: IndexPageProps) => {
  console.log(props.pageContext);
  return (
    <div>
      <h1>Mini</h1>
      <div dangerouslySetInnerHTML={{ __html: props.pageContext.html }} />
    </div>
  );
};

export default IndexTemplate;
