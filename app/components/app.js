import React from 'react';
import { Link } from 'react-router';

export default class AppComponent extends React.Component {
  render() {
    return (
      <section className="content-wrapper flex flex-center">
        <div className="content center col-12">
          <h1 className="f1 mt0">node-gulp-webpack</h1>
          <ul className="list-reset">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/tech'>Tech</Link></li>
          </ul>
          { this.props.children }
        </div>
      </section>
    );
  }
}
