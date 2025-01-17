# Refine.bio Frontend

[![forthebadge](https://forthebadge.com/images/badges/built-with-swag.svg)](https://forthebadge.com)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Farielsvn%2Frefinebio-frontend.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Farielsvn%2Frefinebio-frontend?ref=badge_shield)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the most recent version of the Create React App guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Table of Contents

* [Getting Started](#getting-started)
* [Development](#development)
  * [Git Workflow](#git-workflow)
  * [JavaScript](#javascript)
    * [Framework](#framework)
    * [Formatting](#formatting)
    * [Static Type Checking](#static-type-checking)
  * [Styling](#styling)
* [Executive Dashboard](#executive-dashboard)
  * [Running Locally](#running-locally)

## Getting Started

### Requirements

For development, you will need [Node.js](https://nodejs.org/en/download/) and [Yarn package manager](https://yarnpkg.com/lang/en/docs/install/) installed on your environment.

If you are using a Mac, you can install Yarn through [Homebrew package manager](https://brew.sh/). This will also install Node.js if not already installed.

`brew install yarn`

### Initialize

In the project directory, run:

#### `yarn install`

### Develop

In the project directory, run:

#### `yarn start`

* Runs the app in development mode
* Open http://localhost:3000 to view it in the browser
* Page will reload if you make any edits
* You will also see lint errors in the console

### Production

#### `yarn run build`

* Builds the app for production to the `./build` folder
* Correctly bundles React in production mode and optimizes the build for the best performance
* Build is minified and filenames include hashes

#### Deployment

Deploys are triggered by git tags.
These git tags should correspond to a version of the project.
Once a tag has been pushed, it will trigger a new CircleCI build which will run the tests and then deploy the static files to S3 where they are served from.
A tag pushed to the `dev` branch will result in a new deploy to the staging enviroment while a tag pushed to the `master` branch will result in a new deploy to the prod environment.
A tag can be created and pushed with the following commands:

```
git tag -s vX.X.X -m "<RELEASE MESSAGE>"
git push origin vX.X.X
```

## Development

### Git Workflow

This project uses a [feature branch](http://nvie.com/posts/a-successful-git-branching-model/) based workflow.

New features should be developed on new feature branches named in the following format: `[username]/[fancy-branch-name]`.
Pull requests should be sent to the `dev` branch for code review.
Merges into `master` happen at the end of sprints, and tags in master correspond to production releases.

### JavaScript

#### Framework

This project is using [React](https://reactjs.org/) as a frontend framework coupled with [Redux](https://redux.js.org/) for state management. Routing is being implemented with [React Router](https://github.com/ReactTraining/react-router).

#### Formatting

We use [Prettier](https://prettier.io/), an opinionated code formatter, for JS code formatting. Whenever a commit is made, Prettier will automatically format the changed files. Prettier can also be [integrated](https://prettier.io/docs/en/editors.html) into many text editors.

#### Static Type Checking

We use [Flow](https://flow.org/) for static type checking.

Flow only checks files that include this annotation as the first line of the file:

`// @flow`

Run Flow via the command line with `yarn flow`.

### Styling

* Pre-processor: [SASS](https://sass-lang.com/)
* Write resuabled, modularized using [BEM](http://getbem.com/)
* Configured using [custom-react-scripts](https://github.com/kitze/custom-react-scripts) to avoid losing future creat-react-app support

## Executive Dashboard

Our executive dashboard is used for monitoring the health and state of our system. The dashboard can be viewed at the `/dashboard` route of the frontend.

### Running Locally
If you have the refine.bio backend running locally, just modify `proxy` in `package.json` to point to where your local backend is running.



## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Farielsvn%2Frefinebio-frontend.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Farielsvn%2Frefinebio-frontend?ref=badge_large)