import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import { updatePosts, addPost } from '../actions';

const propTypes = {
  posts: PropTypes.array.isRequired,
  updatePosts: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

const contextTypes = {
  hzPosts: PropTypes.object,
};

class PostsList extends React.Component {

  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    this.context.hzPosts.watch().subscribe(
      postsList => this.props.updatePosts(postsList)
    );
  }

  renderAllPosts() {
    if (!this.props.posts.length) {
      return <li>No posts yet</li>;
    }

    return this.props.posts.map((post, idx) => (
      <li key={idx} className="list-group-item">
        {`${post.title}: ${post.body}`}
      </li>
    ));
  }

  onSubmit(post) {
    console.log(post);
    this.context.hzPosts.store(post).subscribe(
      (postId) => console.log(`New post with id ${postId} added!`)
    );
  }

  render() {
    const {
      fields: { title, body },
      handleSubmit,
    } = this.props;

    return (
      <div>
        <h3>Post List</h3>
        <ul className="list-group">
          {this.renderAllPosts()}
        </ul>
        <hr/>
        <hr/>
        <h4>Add a post</h4>
        <form className="form" onSubmit={handleSubmit(this.onSubmit)}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input className="form-control" type="text" {...title}/>
          </div>
          <div className="form-group">
            <label htmlFor="body"></label>
            <input className="form-control" type="text" {...body}/>
          </div>
          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
PostsList.propTypes = propTypes;
PostsList.contextTypes = contextTypes;

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updatePosts,
  }, dispatch);
}

export default reduxForm({
  form: 'addPost',
  fields: ['title', 'body'],
}, mapStateToProps, mapDispatchToProps)(PostsList);
