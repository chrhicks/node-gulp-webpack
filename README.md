# node-gulp-webpack

Sample project showing how gulp and webpack work together. Also utilizes PostCSS and babel. See the Technology section below for more info on what went into this app.

##Setup

This was built using node.js >= v5.0.0.

```bash
        npm install -g gulp
        npm install
```

##Running

Start the app using npm:

        npm run dev

## Deployment

This project produces a docker image. To release it:

        make release-docker

Thise currently builds and pushes to `chrhicks/node-gulp-webpack`. Update the Makefile to a repository you have access to!

## Technology

**Server:** [Node](https://nodejs.org/en/)

**Framework:** [Express](http://expressjs.com/)

**Template Engine:** [Handlebars](http://handlebarsjs.com/)

**Build Tools:**

- [gulp](http://gulpjs.com/)
- [webpack](https://webpack.github.io/)
- [babel](https://babeljs.io/) (JavaScript ES6)
- [PostCSS](https://github.com/postcss/postcss) (CSS / cssnext)

**Production:** [Forever](https://github.com/foreverjs/forever) (High Availability)
