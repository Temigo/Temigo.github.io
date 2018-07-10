import React from 'react';
import Link from 'gatsby-link';
import moment from 'moment';
import Disqus from '../Disqus/Disqus';
import './style.scss';

class ProjectTemplateDetails extends React.Component {
  render() {
    const { subtitle, author } = this.props.data.site.siteMetadata;
    const post = this.props.data.markdownRemark;
    const tags = post.fields.tagSlugs;

    const homeBlock = (
      <div>
        <Link className="post-single__home-button" to="/projects">All Projects</Link>
      </div>
    );

    const tagsBlock = (
      <div className="post-single__tags">
        <ul className="post-single__tags-list">
          {tags && tags.map((tag, i) => (
            <li className="post-single__tags-list-item" key={tag}>
              <Link to={tag} className="post-single__tags-list-item-link">
                {post.frontmatter.tags[i]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );

    const commentsBlock = (
      <div>
        <Disqus postNode={post} />
      </div>
    );

    return (
      <div>
        {homeBlock}
        <div className="project-single">
          <div className="project-single__inner">
            <h1 className="project-single__title">{post.frontmatter.title}</h1>
            <div className="project-single__body" dangerouslySetInnerHTML={{ __html: post.html }} />

          </div>
          <div className="project-single__footer">
            {tagsBlock}
            <hr />
            <p className="project-single__footer-text">

            </p>
            {commentsBlock}
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectTemplateDetails;
