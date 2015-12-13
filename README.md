# node-gulp-webpack

An isomorphic React application utilizing PostCSS and Babel. Uses gulp and webpack in the build process.

The isomorhpic React part was inspired by the [Universal React 24 Ways post by Jack Franklin](https://24ways.org/2015/universal-react/)

##Setup

This was built using node.js >= v5.0.0.

```bash
        npm install -g gulp
        npm install
```

##Running

Start the app using npm:

        npm run dev

Visit in the browser: `http://localhost:7010`

## Deployment

This project produces a docker image. To release it:

        make release-docker

Thise currently builds and pushes to `chrhicks/node-gulp-webpack`. Update the Makefile to a repository you have access to!

## Technology

**Server:** [Node](https://nodejs.org/en/)

**Framework:** [Express](http://expressjs.com/)

**Template Engine:** [Handlebars](http://handlebarsjs.com/)

**UI Framework:** [React](http://facebook.github.io/react/)

**Build Tools:**

- [gulp](http://gulpjs.com/)
- [webpack](https://webpack.github.io/)
- [babel](https://babeljs.io/) (JavaScript ES6 - Server & Client)
- [PostCSS](https://github.com/postcss/postcss) (CSS / cssnext)

**Production:** [Forever](https://github.com/foreverjs/forever) (High Availability)
