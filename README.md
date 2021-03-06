# About RONAvis

This site is hosted on Netlify, check it out: https://awesome-heisenberg-4d6516.netlify.app/

Local setup down below.

Project is built with a combination of React and Three.js. React is using TypeScript, Three.js is using normal javascipt (for speed reasons). 

This was built in 5-6 hours, so don't expect too much.

The visualisation is done with Three.js, just some simple spheres who change color & size based on the amount of cases that day for that location. I've enabled OrbitControls for this, so feel free to drag around. These can be extended much further into other visualisations but it shows the basics of communications between React state and WebGL.

## Design plan:

The idea was to visualise the data based on months, clicking the bottom links, would show you the correct month and would animate to the left. So the next month becomes visible. Unfortunately, the data is based on each day, so working with a date selector is the best decision.

![Original design plan](https://github.com/Emielvanbetsbrugge/rona-vis/blob/main/interactive_original_design.png)

## Project setup

This project is set up with Create React App. This requires [Node](https://nodejs.org/en/) to be installed. Minimum version required is v8. More info below.

Kick off after cloning the repo onto your machine with a ```npm install``` and then run ```npm start```. Enjoy.

### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can???t go back!**

If you aren???t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you???re on your own.

You don???t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn???t feel obligated to use this feature. However we understand that this tool wouldn???t be useful if you couldn???t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


