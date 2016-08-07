import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import reducerPosts from './reducerPosts';

const rootReducer = combineReducers({
  posts: reducerPosts,
  form: formReducer,
});

export default rootReducer;
