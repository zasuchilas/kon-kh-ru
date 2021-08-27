const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      site {
        siteMetadata {
          title
          description
          url
          keywords
          author
        }
      }
      allMarkdownRemark {
        edges {
          node {
            html
            frontmatter {
              slug
              template
              date
              title
              description
              keywords
              author
            }
          }
        }
      }
    }
  `);

  const siteMetadata = result.data.site.siteMetadata;

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { html, frontmatter } = node;
    const markdownMetadata = {
      ...frontmatter,
      image: frontmatter.image
        ? frontmatter.image.childImageSharp.resize
        : null,
    };

    const { slug, template } = markdownMetadata;

    // index | page | blog
    const component = path.resolve(`./src/templates/${template}-template.tsx`);

    createPage({
      path: slug,
      component,
      context: {
        html,
        siteMetadata,
        markdownMetadata,
      },
    });
  });
};
