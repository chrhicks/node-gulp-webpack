import React from 'react';

export default class TechComponent extends React.Component {
  render() {
    return (
      <div>
        <p>Technology used in this application</p>
        <section className="col-6 mx-auto left-align">
          <h2 className="f3">Babel</h2>
          <p>Babel is used both on the server and client side.</p>
          <p>
            <code>babel-node</code> is used to run the node express app in
            development mode. In production mode, the <code>babel</code> cli is
            used to compile the server side java script to
            the <code>dist</code> directory.
          </p>
        </section>
        <section className="col-6 mx-auto left-align">
          <h2 className="f3">Gulp</h2>
          <p>
            The task runner for the project. Used in dev mode
            via <code>npm run dev</code> to run PostCSS and Webpack.
            <code> nodemon</code> is used to restart the app when changes are
            made to the express app.
          </p>
        </section>
        <section className="col-6 mx-auto left-align">
          <h2 className="f3">Webpack</h2>
          <p>
            Build tool for all of the javascript only, including the react
            components that are all rendered server side. The entry point is
            <code> app/client-render.js</code> which will give webpack only the
            dependency tree required to run the app in the browser.
          </p>
        </section>
        <section className="col-6 mx-auto left-align">
          <h2 className="f3">PostCSS</h2>
          <p>
            Allows the app to use upcoming css syntax before it is available
            in the browser. The <code>gulp-postcss</code> plugin is used to
            compile to browser friendly css.
          </p>
        </section>
        <section className="col-6 mx-auto left-align">
          <h2 className="f3">React</h2>
          <p>
            This app uses React isomorphically. All of the modules
            are techinically server side and can be delivered to the browser
            that way. Webpack is used to generate a client side package that will
            bring the functionality to the client side as well.
          </p>
          <p>
            <code>react-router</code> is used to handle routing client side.
            Once a page (on any url) is loaded, all subsequent loading happens
            client side.
          </p>
        </section>
      </div>
    );
  }
}
