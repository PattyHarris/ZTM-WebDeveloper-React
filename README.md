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

## Building A React App 1

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

## React.Fragment and Semantic HTML

Resources: - https://blog.logrocket.com/rendering-child-elements-react-fragments/

Instead of wrapping everything in a "div" when returning more than a single line of JSX, use React.Fragment (as a wrapper) instead:

```jsx
function FAQ() {
  return (
    <React.Fragment>
      <p>Q. What is React?</p>
      <p>A. A JavaScript library for building user interfaces</p>
      <p>Q. How do I render sibling elements?</p>
      <p>A. Use Fragments</p>
    </React.Fragment>
  );
}

/* Or, using the <> </> notation */
function FAQ() {
  return (
    <>
      <p>Q. What is React?</p>
      <p>A. A JavaScript library for building user interfaces</p>
      <p>Q. How do I render sibling elements?</p>
      <p>A. Use Fragments</p>
    </>
  );
}
```

## The dirty little secret to become an expert

Read the docs...

## Exercise: Learn to Read the Docs

Read the docs for "StrictMode" - actually a good thing to read since it discusses it's purpose during development.

## Building A React App 2

1.  Using the parent to child control rules, create a "CardList" component that will control all the "Card" components.
2.  Instead of using the "cardArray" in "CardList", the code that "maps" the items into the "cardArray" could simply be put in the main "return" of "CardList".

    ```jsx
    const CardList = ({ robots }) => {
      const cardArray = robots.map((robot, index) => {
        return (
          <Card
            key={index}
            id={robot.id}
            name={robot.name}
            email={robot.email}
          />
        );
      });
      return <div>{cardArray}</div>;
    };

    /* Instead */
    return (
      <div>
        {robots.map((robot, index) => {
          return (
            <Card
              key={index}
              id={robot.id}
              name={robot.name}
              email={robot.email}
            />
          );
        })}
      </div>
    );
    ```

## Building A React App 3

1. Resources:
   - https://react.dev/learn/responding-to-events (given link is outdated)
   - https://www.w3schools.com/jsref/jsref_tolowercase.asp
   - https://www.w3schools.com/jsref/jsref_includes.asp
2. This section adds the title and search box.
3. Refactor to put back a App component that will return the CardList component.
4. Add the title to the App.
5. Add a SearchBox component.
6. State: we need state to communicate between components. In order for the SearchBox to give data to the CardList, we need to pass the data from the SearchBox to it's parent (the App) which can then pass that along to it's child component, the CardList.
7. In order to use state, the function components need to be reverted back to class components - but this, based on the documentation is no longer needed after version 16.8..but, if you use a functional component, you'll need hooks to manage state, among other things (Geeks has a great comparison on the difference between class and functional components).
8. Our state object - which then is used in the constructor of the App component:

   ```jsx
   const state = {
     robots: robots,
     searchField: "",
   };
   ```

9. Create a callback function, "onSearchChange" that takes an event - added to the App component and passed to the SearchBox component:

   ```jsx
   onSearchChange(event) {

   }

   /* The passed to the SearchBox */
   < SearchBox searchChange={this.onSearchChange}>
   ```

10. "this" inside of the App's "onSearchChange function doesn't refer to the App's "this", but the "this" of the "input" field of the SearchBox. To fix the problem, use arrow functions (hmmmm):

    ```jsx
        onSearchChange(event) {
            const filteredRobots = this.state.robots.filter((robot) => {
                return robot.name.toLowerCase()
                    .includes(this.state.searchField.toLowerCase());
            });

            console.log(filteredRobots);
        }

        /* Instead.... */
        onSearchChange = (event) => {

        }
    ```

11. To change state, we need to use "this.setState()", NOT "this.state = ". Just the way it is...

    ```jsx
    onSearchChange = (event) => {
      this.setState({ searchField: event.target.value });
      const filteredRobots = this.state.robots.filter((robot) => {
        return robot.name
          .toLowerCase()
          .includes(this.state.searchField.toLowerCase());
      });

      console.log(filteredRobots);
    };
    ```

12. Using "filteredRobots" - move the code to the App's render function and pass that array to the CardList component instead of "this.state.robots".

## Styling Your React App

1. Resources:
   - https://css-tricks.com/snippets/css/using-font-face-in-css/
   - sega-logo-font-cufonfonts-webfont
2. Add the background gradient to index.css.
3. Added back the App.css file to include the "sego-logo" font. See the above resource about using the new file format for fonts. The sego.wolf file must reside in the project (or on some path).

## Building A React App 4

1. Resources (the first 2 are the same, in case the first one is "down"):
   - https://jsonplaceholder.typicode.com/
   - https://jsonplaceholder.cypress.io/
   - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
   - https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
2. In this section, use an API instead of the hard-coded array of robots.
3. Smart Components: App.js has state which makes it a "smart component", whereas the other components are "pure functions" (e.g. no state).
4. Lifecycle methods: using ComponentDidMount to load the robots.js file. NOTE: some lifecycle methods are deprecated, such as ComponentWillMount.
5. NOTE: added a "name" attribute to the search box input to get rid of a minor warning in the console asking for "name" or "id".
6. Before we replace the list of robots with fetch:

   ```jsx
   class App extends Component {
   constructor() {
       super();
       this.state = {
       robots: [],
       searchField: "",
       };
   }

   componentDidMount() {
       this.setState({ robots: robots });
   }

   ```

7. Fetch - using this URL: https://jsonplaceholder.typicode.com/users from the resources above.
8. Fetch code:

   ```jsx
   fetch("https://jsonplaceholder.typicode.com/users")
     .then((response) => {
       return response.json();
     })
     .then((users) => {
       this.setState({ robots: users });
     });

   /* Or more cleanly */
   fetch("https://jsonplaceholder.typicode.com/users")
     .then((response) => response.json())
     .then((users) => this.setState({ robots: users }));
   ```

9. NOTE: VSCode puts "()" around variables that aren't really needed....e.g (response) above.
10. If the access to the online robots is slow, add a conditional to the "render":

    ```jsx
    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>;
    } else {
      /* Usual render */
    }
    ```

## Building A React App 5

1. Using React to refactor the search area to stay at the top of the screen when the user scrolls. Uses the concepts around "children".
2. Create a component "Scroll" that wraps around the CardList component (or any component that needs scrolling).
3. Since the CardList is a child of the Scroll component, returning "props.children" effectively renders the CardList component:

   ```jsx
   const ScrollList = (props) => {
     return props.children;
   };
   ```

4. Using inline styles in JSX: "{{}}" - here to make use of inline styles, see the Scroll component.

## Building A React App 6

1. Refactor the application to organize all the files into component and container folders.
2. "components" will include all the pure function components. "containers" will contain the components (App.js) which have state.
3. Also, instead of using "this.state.whatever":

   ```jsx
   render() {
       const { robots, searchfield } = this.state;
       const filterRobots = robots.filter( robot => {
           return robot.name.toLowerCase().includes(searchfield.toLowerCase());
       })

       /* etc. */
   }
   ```

4. Another bit of cleanup:

   ```jsx
   /* Change this */
   if (robots.length === 0) {
     return <h1 className="tc">Loading.....</h1>;
   } else {
     return (
       <div className="tc">
         <h1 className="f1">RoboFriends</h1>
         <SearchBox searchChange={this.onSearchChange} />
         <Scroll>
           <CardList robots={filteredRobots} />;
         </Scroll>
       </div>
     );
   }
   }

   /* To */
    return !robots.length ? (
      <h1 className="tc">Loading.....</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />;
        </Scroll>
      </div>
    );
   }
   ```

5. npm run build - creates a "build" folder with all the code optimized and minimized. The output of the build also includes help on how to install the code.

## Project Files

Resources: https://github.com/aneagoie/robofriends

## Keeping Projects Up To Date

1. To update the repo, first clone, then "npm install" - here you might see the usual "run npm audit fix" and followed by some warnings about "breaking change". That means that some of the changes may break your project. If you run "npm audit" (without "fix") it gives you some idea as to which packages might be the problem.
2. Instead of running "npm audit fix --force", run "npm update" and then "npm audit fix --force". The issue in my case is that "react-scripts" is newer than the "fixed" version "react-scripts@3.0.1" - since I don't want to downgrade the version, I'll just leave this stuff as is.
3. Actually, after removing package.json and package-lock.json and re-installing, I'm down to one error: PostCSS line return parsing error - blah blah blah - which apparently a new bug that hasn't been fixed...
4. Steps - this gets the errors down to the PostCSS error (this after a bunch of searches):

   ```bash
   > npm install @svgr/webpack --save-dev
   > rm -rf node_modules
   > rm package-lock.json
   > npm install
   ```

## React Error Boundary

1. The ability for a component to more gracefully handle errors.
2. Create a new component, ErrorBoundary.js.
3. If any errors occur in the CardList, the error is then caught by ErrorBoundary which wraps CardList.
4. To test, add the following to CardList:

   ```jsx
   if (true) {
     throw new Error("Ouch!");
   }
   ```

5. You won't really see the error work properly since we're running in development mode. I tried to use setTimeout, but this requires useEffect which only works on functional components.

## Deploying our React App

1. Resources:
   - https://create-react-app.dev/docs/deployment/#github-pages
2. Pretty much follow the steps in the above resource except that I had to make this repository public (it's a setting in the Danger Zone area under the project Settings).
3. Under Settings, Pages change the Branch to gh-pages. Click Save. You might need to wait a bit.
4. Doesn't really work since I have "robo-friends" as a sub-folder. There is an on-going complaint thread about this on the various forums.
