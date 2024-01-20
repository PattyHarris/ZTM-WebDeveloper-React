# ZTM-WebDeveloper-React

This repository is a continuation of the ZTM-WebDeveloper repository where the section on React has been separated out.

## Introduction

1. Use small components to combine into what becomes the web page.
2. One way data flow - data flows from top to bottom only - e.g. only "child" components need to change when a change happens to the parent component.
3. Virtual DOM: JS object which describes the current state of the website. Changes are handles by React to make minimal changes to the actual DOM.
4. Eco-System: lots of tools, large community (e.g. Next.js).

## React Guide

Resources:

- https://zerotomastery.io/cheatsheets/react-cheat-sheet/?utm_source=udemy

## Create React App

1. Resources:

   - https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b
   - https://create-react-app.dev/docs/getting-started/
   - https://marketplace.visualstudio.com/items?itemName=jawandarajbir.react-vscode-extension-pack

2. The old way of installing used "npm", now we use "npx" - basically a package runner.

   ```bash
   > npm install -g create-react-app

   > npx create-react-app my-app
   > cd my-app
   > npm start
   ```

3. Create the "Robo Friends" project:

   ```bash
    > npx create-react-app robo-friends
   > cd robo-friends
   > npm start
   ```

## React + Vite

1. Resources:
   - https://vitejs.dev/guide/
2. An alternative to "create-react-app" - e.g. another build tool.
3. Allows one to scaffold out the project and very fast.
4. If performance is important, you can use this tool.
5. To create a project, see the guide for instructions - prompts for selection of project name, framework, variant (e.g. typescript)

   ```bash
    > npm create vite@latest
    > cd vite-project
    > npm install
    > npm run dev

    VITE v4.4.9 ready in 719 ms

    -> Local: http//localhost:5173
    -> Network: use --host to expose
    -> press h to show help
   ```

## React App Folder Structure

1. package-lock.json - basically locks in the version numbers, such that when someone else installs the code, the same version numbers are used.
2. The most important part of "./public/index.html" is within the "body" - "id=root":

   ```html
   <body>
     <noscript>You need to enable JavaScript to run this app.</noscript>
     <div id="root"></div>
     <!--
       This HTML file is a template.
       If you open it directly in the browser, you will see an empty page.
   
       You can add webfonts, meta tags, or analytics to this file.
       The build step will place the bundled scripts into the <body> tag.
   
       To begin the development, run `npm start` or `yarn start`.
       To create a production bundle, use `npm run build` or `yarn build`.
       -->
   </body>
   ```

3. The above comes from "./src/index.js":

   ```javascript
   const root = ReactDOM.createRoot(document.getElementById("root"));
   root.render(
     <React.StrictMode>
       <App />
     </React.StrictMode>
   );
   ```

## React 18 Update

1. The main difference initially is the way the app is rendered (as noted above). The old way, which is similar, is no longer supported. Since my version is 18.2, no changes needed on my part...

## React Fundamentals

1. ReactDOM connects React to the DOM. It's a separate package since you can use React on other platforms besides the browser.
2. The call to "render" above basically calls the "App" function (e.g. component) and places the results inside the the "root" div.

## React Fundamentals 2

1. "registerServiceWorkers": older versions will have this included in the default setup. Current setup includes "reportWebVitals();".
2. JSX: make sure to select Javascript JSX as the language for these projects (in VSCode).

## Hooks vs Classes

1. Start with Classes - towards the end of the project, the project will be converted using Hooks.

## Class vs Functional App.js

1. Convert the functional App.js to a class:

   ```javascript
   // Old code:
   function App() {
   return (
       // .....
   )
   };

   // New code:
   import React from 'react';

   class App extends React.Component {
       render() {
           return (
               // ......
           )
       }
   }
   ```

2. The older versions of React used to start the App off as a class component.

## Your First React Component

1. Resources:
   - https://developer.chrome.com/docs/workbox/service-worker-overview/
2. Since we're using "webpack" as the bundler, we can now use "import" (whereas before, we started using "browserify" - see prior lectures).
3. The "App.js" file in this video also import the "Component" component separately in the "import React" statement.

   ```jsx
   import React, { Component } from "react";

   // ...

   class App extends Component {
     //.....
   }
   ```

4. Build a "Hello" component - replace "App" with "Hello" that does nothing more than provide an "h1" tag with "Hello".
5. Anytime you return more than one line, you need "return ()".
6. "tachyons":

   - https://tachyons.io
   - Similar to Bootstrap
   - Creates "fast loading, highly readable ... CSS"

7. Using "tachyons"

   ```jsx
   class Hello extends Component {
   render() {
       return (
       <div className="f1 tc"> <!-- addition of class here -->
           <h1>Hello</h1>
           <p>Welcome to React!</p>
       </div>
       );
   }
   }
   ```

8. Had a funny error - see the install from SO that fixes the issue:

   ```bash
   "One of your dependencies, babel-preset-react-app, is importing the
   "@babel/plugin-proposal-private-property-in-object" package without
   declaring it in its dependencies. This is currently working because
   "@babel/plugin-proposal-private-property-in-object" is already in your
   node_modules folder for unrelated reasons, but it may break at any time.

   babel-preset-react-app is part of the create-react-app project, which
   is not maintained anymore. It is thus unlikely that this bug will
   ever be fixed. Add "@babel/plugin-proposal-private-property-in-object" to
   your devDependencies to work around this error. This will make this message
   go away."

   > npm install --save-dev @babel/plugin-proposal-private-property-in-object
   ```

9. Note that with JSX, use "className" instead of "class"...separation of concerns, virtual DOM (e.g. their HTML is React HTML). Also "class" is a javascript reserved word, since this is javascript, they use "className"...
10. props:

    ```jsx
        const root = ReactDOM.createRoot(document.getElementById("root"));

        root.render(
        <React.StrictMode>
        <Hello greeting={'Hello ' + "React Ninja'}/>
        </React.StrictMode>
        );

        // ..Then in Hello.js

        class Hello extends Component {
            render() {
                return (
                <div className="f1 tc">
                    <h1>Hello</h1>
                    <p>this.props.greeting</p>
                </div>
                );
            }
        }
    ```

11. The "Hello" component is "just" a function - here it has been converted to a simple function:

    ```javascript
            const Hello = {props} => {
                return (
                    <div className="f1 tc">
                        <h1>Hello</h1>
                        <p>props.greeting</p>
                    </div>
                );
            }

    ```

## Building Your First React App 1

1. Resources:
   - https://robohash.org/
   - File of robots objects
2. Remove the Hello component and CSS. Starting off with a clean project. Remove "App.\*" files as well and the "logo.svg".
3. Build the card component - "Card". To start, the card will be a function component. Since we're using JSX, we need to import React.
4. For the Robot images, src="https://robohash.org/<put any text here>?<size=widthxheight>" and it will generate some random Robot image using the given width and height.
5. Using tachyons, "dib" is equivalent to "display:inline-block".
6. Using the robots.js file: since the file just uses "export" and not "export default", when the file is imported, you need use destructuring:

   ```jsx
   import { robots } from "./robots";
   ```

7. You can destructure the Card props in a couple of ways:

   ```jsx
    const Card = (robot) => {

    return (
        <div className="tc bg-light-green dib br3 ma2 grow bw2 shadow-5">
        <img alt="Robot" src={`https://robohash.org/${robot.id}?size=200x200`} />
        <div>
            <h2>{robot.name}</h2>
            <p>{robot.email}</p>
        </div>
        </div>
    );
    };

    /* Or */
    const Card = (robot) => {
    const { name, email, id } = robot;

    /* .... */

    /* Or */
    const Card = ({ name, email, id }) => {

   ```
