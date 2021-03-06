import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, {PropTypes} from 'react';

export default class Page extends Component {

  static propTypes = {
    // Why not PropTypes.object.isRequired? Because:
    // https://github.com/rackt/react-router/issues/1505
    msg: PropTypes.object
  };

  render() {
    const {msg: {home: msg}} = this.props;

    return (
      <div className="home-page">
        <Helmet title={msg.title} />
        <h1>[ Este.js ] - Default Home Page</h1>
        <pre>This component can be found at ~/src/browser/home/Page.react.js</pre>
      </div>
    );
  }
}
