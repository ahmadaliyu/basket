<!-- Title -->
<h1 align="center">
 Basket App
</h1>

<!-- Header -->

<p align="center">
  <b>Create React Native apps with no build configuration.</b>
  <br />

  <p align="center">
    <!-- iOS -->
    <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
    <!-- Android -->
    <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
  </p>
</p>

<!-- Body -->

```sh
npx create-react-native-app
```

Once you're up and running with Create React Native App, visit [this tutorial](https://reactnative.dev/docs/tutorial.html) for more information on building apps with React Native.

## Features

- Create business account.
- Send money to any bank.
- Receive money from any bank to you account.
- Request Debit Card
- Works with the Expo Client app.

## Usage

- `npx create-react-native-app` Create a new React Native app.
- `yarn ios` -- (`react-native run-ios`) Build the iOS App (requires a MacOS computer).
- `yarn android` -- (`react-native run-android`) Build the Android App.
- `yarn web` -- (`expo start:web`) Run the website in your browser.

## Usage with Expo Client App

Expo Client enables you to work with all of the [Components and APIs](https://facebook.github.io/react-native/docs/getting-started.html) in React Native, as well as the [JavaScript APIs](https://docs.expo.io/versions/latest/sdk/index.html) that the are bundled with the Expo App.

Expo Client supports running any project that doesn't have custom native modules added.

- Download the "Expo Client" app from the Play Store or App Store.
- Start your project with Expo
  - Install the CLI `npm i -g expo-cli`
  - Start the project `expo start`
- Open the project:
  - Sign in to expo and the project will appear in the app.
  - Or point your phone's camera at the QR code in the terminal (press "c" to view it).

## Commands

- npm run start - this will start the app using dev client
- npm run start:go - this will start the app using expo go

## Convention

- make use of camelCase for variable declaration
- define your types in the type folder
- make your component a functional component
- apply types to every of your functions with params

## Deployment
