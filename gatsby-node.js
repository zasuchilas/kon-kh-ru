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
              demo
              template
              date
              title
              description
              keywords
              author
              image: featured {
                childImageSharp {
                  resize(width: 1200) {
                    src
                    height
                    width
                  }
                }
              }
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

    const { demo, slug, template } = markdownMetadata;

    // index | page | blog
    const component = !demo
      ? path.resolve(`./src/templates/${template}-template.tsx`)
      : path.resolve(`./src/templates/demo/${demo}-template.tsx`);

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
