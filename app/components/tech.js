import React from 'react';

export default class TechComponent extends React.Component {
  render() {
    return (
      <div>
        <p>Technology used in this application</p>
        <ul>
          <li>Babel (server and client)</li>
          <li>Gulp</li>
          <li>Webpack</li>
          <li>PostCSS</li>
        </ul>
      </div>
    );
  }
}
