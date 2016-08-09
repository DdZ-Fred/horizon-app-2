import React, { PropTypes } from 'react';
import PostsList from '../components/PostsList';

const contextTypes = {
  hz: PropTypes.func,
};

function PostsListHoc(WrappedComponent) {
  return class PostsListContainer extends React.Component {
    static contextTypes = contextTypes;

    render() {
      return <WrappedComponent hzPosts={this.context.hz('posts')} {...this.props} />;
    }
  };
}


export default PostsListHoc;
