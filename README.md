# enjoywork-todo-list-fe

## How to set up project

**Step 1:** git clone this repository: git clone [git@gitlab.com:MinhToi/enjoywork-todo-list-fe.git](git@gitlab.com:MinhToi/enjoywork-todo-list-fe.git)

**Step 2:** cd to the cloned repository: cd app-web

**Step 3:** Install the Application with yarn

## How to Run App

1. cd to the repo
2. Run & Build

- Run
  - Run `npm run start`
  - View app on [http://localhost:3000](http://localhost:3000)
- Build
  - Run `npm run build`
  - View `build` folder in the repository

## Secrets

API keys and other sensitive information are shared privately and stored in a .env.[environment] file.

Example file: `.env.sample`
REACT_APP_BASE_URL=https://myapi.com
REACT_APP_API_KEY=abc12345

and access them from React app like so:
process.env.REACT_APP_API_URL
process.env.REACT_APP_API_KEY

## Frontend Technical Stack

This is the list of important technologies that would be used to implement the project.

### Technical stack

#### Languages

**HTML5**
Hypertext Markup Language revision 5 (HTML5) is a markup language for the structure and presentation of World Wide Web contents. HTML5 supports the traditional HTML and XHTML-style syntax and other new features in its markup, New APIs, XHTML and error handling.

**CSS3**
A cascading style sheet (CSS) is a Web page derived from multiple sources with a defined order of precedence where the definitions of any style element conflict.

**JavaScript**

- An object-oriented computer programming language commonly used to create interactive effects within web browsers.
- ECMAScript 2015 is an ECMAScript standard that was ratified in June 2015. ES2015 is a significant update to the language, and the first major update to the language since ES5 was standardized in 2009.

#### Tools & Libraries

**React**

- A JavaScript library for building user interface.
- Homepage: https://facebook.github.io/react

**Webpack**

- Webpack is a module bundler. Webpack takes modules with dependencies and generates static assets representing those modules.
- Homepage: https://webpack.github.io
- Plugins
  - **Webpack Dev Middleware**
    - The webpack-dev-middleware is a small middleware for a connect-based middleware stack. It uses webpack to compile assets in-memory and serve them. When a compilation is running every request to the served webpack assets is blocked until we have a stable bundle.
    - Homepage: https://github.com/webpack/webpack-dev-middleware
  - **TerserWebpackPlugin**
    - Minimize all JavaScript output of chunks. Loaders are switched into minimizing mode.
    - Homepage: https://webpack.js.org/plugins/terser-webpack-plugin/
- Loaders
  - **Sass**
    - CSS loader for Webpack
    - Homepage: https://github.com/jtangelder/sass-loader
  - **CSS**
    - SASS loader for Webpack
    - Homepage: https://github.com/webpack-contrib/css-loader
  - **ESLint**
    - The pluggable linting utility for JavaScript and JSX
    - Homepage: https://github.com/eslint/eslint
  - **File**
    - File loader for Webpack
    - Homepage: https://github.com/webpack-contrib/file-loader
  - **Style**
    - Style loader for Webpack
    - Homepage: https://github.com/webpack-contrib/style-loader

**React-router**

- Declarative routing for React.
- Homepage: https://github.com/ReactTraining/react-router
  **React-redux**
- Declarative store for react
- Homepage: https://react-redux.js.org/
  **Material-ui**
- Declarative component for React.
- Homepage: https://material-ui.com/
  **Prettier**
- Prettier is an opinionated code formatter
- Homepage: https://prettier.io

## Estimate project

| Title                                    | Timeline |
| ---------------------------------------- | :------: |
| analysis project                         |    4h    |
| build codebase                           |    4h    |
| code sign in, sign up, account page UI   |    8h    |
| code todo list page UI                   |    8h    |
| code sign in, sign up features           |    4h    |
| code update account features             |    4h    |
| code CRUD todo list feature              |    8h    |
| code toast feature                       |    4h    |
| code side effect ( loading, validation ) |    6h    |
| Breaking time each days                  |   10h    |
| testing & fix bug                        |   16h    |
| release                                  |    2h    |
| total                                    |   78h    |

Started by: 16/03/2021
Released by: 30/03/2021
