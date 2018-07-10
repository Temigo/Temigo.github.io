import React from 'react';
import Helmet from 'react-helmet';
import Project from '../components/Project';
import Sidebar from '../components/Sidebar';
import Img from 'gatsby-image';

class IndexRoute extends React.Component {
  render() {
    const items = [];
    const { title, subtitle } = this.props.data.site.siteMetadata;
    const posts = this.props.data.allMarkdownRemark.edges;
    console.log('Hi');
    posts.forEach((post) => {
      items.push(<Project data={post} key={post.node.fields.slug} />);
    });

    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={subtitle} />
        </Helmet>
        <Sidebar {...this.props} />
        <div className="content">
          <div className="content__inner">
            <h1 className="page__title">Projects</h1>
            <p>I enjoy(ed) working on these besides my research.</p>
            {items}
          </div>
        </div>
      </div>
    );
  }
}

export default IndexRoute;

export const pageQuery = graphql`
  query MyQuery {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        menu {
          label
          path
        }
        author {
          name
          email
          telegram
          twitter
          github
          rss
          vk
        }
      }
    }
    allMarkdownRemark(
        limit: 1000,
        filter: { frontmatter: { layout: { eq: "project" }, draft: { ne: true } } },
        sort: { order: DESC, fields: [frontmatter___date] }
      ){
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date
            description
            frontImage {
                childImageSharp {
                    sizes(maxWidth: 960) {
                        ...GatsbyImageSharpSizes
                    }
                }
            }
          }
        }
      }
    }
  }
`;
