import React from 'react';
import Helmet from 'react-helmet';
import Post from '../components/Post';
import Sidebar from '../components/Sidebar';
import PageTemplateDetails from '../components/PageTemplateDetails';

class IndexRoute extends React.Component {
  render() {
    const items = [];
    const { title, subtitle } = this.props.data.site.siteMetadata;

    return (
      <div>
        <PageTemplateDetails {...this.props} />
      </div>
    );
  }
}

export default IndexRoute;

export const pageQuery = graphql`
  query IndexQuery {
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
          linkedin
        }
      }
    }
    markdownRemark(
      fields: { slug: { eq: "/about" } }
    ) {
      id
      html
      frontmatter {
        title
        date
        description
      }
    }
  }
`;
