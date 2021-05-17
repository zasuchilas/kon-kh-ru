const path = require('path');
const { clearHtml } = require('./builder/markdown-helpers');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            html
            frontmatter {
              slug
              title
              date
            }
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const {
      html: dirtyHtml,
      frontmatter: { slug, title, date },
    } = node;

    // const html = clearHtml(dirtyHtml);
    const html = dirtyHtml;

    createPage({
      path: slug,
      component: path.resolve(`./src/templates/index-template.tsx`),
      context: {
        slug,
        title,
        date,
        html,
      },
    });
  });
};
