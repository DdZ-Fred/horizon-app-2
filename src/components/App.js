import React, { PropTypes } from 'react';
import Horizon from '@horizon/client';

const childContextTypes = {
  hz: PropTypes.func,
};

class App extends React.Component {

  constructor(props) {
    super(props);

    this.horizon = Horizon({ host: 'localhost:8181' });
  }

  getChildContext() {
    return {
      hz: this.horizon,
    };
  }

  render() {
    return (
      <div>
        <h1>My Horizon App</h1>
        {this.props.children}
      </div>
    );
  }
}

App.childContextTypes = childContextTypes;
export default App;
