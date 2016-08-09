import React, { Component, PropTypes } from 'react';

const propTypes = {
  post: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
};

class Post extends Component {

  constructor(props) {
    super(props);

    this.handleDeleteBtnClick = this.handleDeleteBtnClick.bind(this);
  }

  handleDeleteBtnClick(e) {
    e.preventDefault();
    this.props.deletePost(this.props.post.id);
  }

  render() {
    const { title, body } = this.props.post;
    return (
      <li className="list-group-item">
        <span className="post-title">{title}</span>
        <span className="post.body">{body}</span>
        <button
          className="btn btn-xs btn-danger"
          onClick={this.handleDeleteBtnClick}>
          <span className="glyphicon glyphicon-remove"></span>
        </button>
      </li>
    );
  }
}

Post.propTypes = propTypes;

export default Post;
