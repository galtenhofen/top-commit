## Install dependencies
Run `npm install` to install the project dependencies.

## Development Workflow

Run `ionic build` or `ionic build --prod` to build the project

### To test the app in the browser

Run `ionic serve` to start a live-reload dev server

### To test the app with Server Side Rendering

Run `npm run dev:ssr`

In production, run `npm run build:ssr && npm run serve:ssr`

### To test the app as a Native App

This project uses [Capacitor](https://capacitor.ionicframework.com/docs/) (spiritual successor to Cordova).

Before starting make sure to read the [Capacitor Required Dependencies](https://capacitor.ionicframework.com/docs/getting-started/dependencies).

The Capacitor workflow involves a few consistent tasks:
- [Develop and build your Web App](https://capacitor.ionicframework.com/docs/basics/workflow/#1-develop-and-build-your-web-app)
- [Copy your Web Assets](https://capacitor.ionicframework.com/docs/basics/workflow/#2-copy-your-web-assets)
- [Open your Native IDE](https://capacitor.ionicframework.com/docs/basics/workflow/#3-open-your-native-ide)
- [Periodic Maintenance](https://capacitor.ionicframework.com/docs/basics/workflow/#4-periodic-maintenance)

#### iOS Platform
This app has an ios folder which contains the iOS native app.
Read how to [build this app for iOS](https://capacitor.ionicframework.com/docs/basics/building-your-app#ios).

#### Android Platform
This app has an android folder which contains the Android native app.
Read how to [build this app for Android](https://capacitor.ionicframework.com/docs/basics/building-your-app#android).
