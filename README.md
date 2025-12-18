# JOD Maintenance Page UI

This repository is the UI for JOD Maintenance Page. JOD Maintenance Page is part of the Digital Service Ecosystem for Continuous Learning (JOD) project.

The UI app is built using React, Vite, and TypeScript.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

1. First, ensure that you have [NVM](https://github.com/nvm-sh/nvm) installed on your machine.
2. Clone this repository to your local machine.
3. Open a terminal window and navigate to the root directory of the project.
4. Run the following command to install Node.js & NPM and the dependencies:

```shell
nvm install
nvm use
npm install
npm exec allow-scripts run
```

5. Take the steps in JOD Design System repository to get components of the design system work in hot reload mode.
6. Once the installation is complete, run the following command to start the development server:

```shell
npm run dev
```

7. The app should now be running on http://localhost:8080/.

## Download third-party UI assets

Third-party assets such as images, fonts, and icons are stored in a S3 bucket. Guide to download assets is available in the infrastructure repository.

## Updating JOD Design System

Run the following command to update the JOD Design System to the latest version:

```shell
npm update @jod/design-system
```
