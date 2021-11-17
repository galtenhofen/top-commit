// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCMFpZdk_ioHyMP6EefqTGN2B0kuH3E_Xc",
    authDomain: "top-commit.firebaseapp.com",
    projectId: "top-commit",
    storageBucket: "top-commit.appspot.com",
    messagingSenderId: "914275994539",
    appId: "1:914275994539:web:d98b438737ddc67fcaa0ee",
    measurementId: "G-TV7GKCPEDX"
  },
  appShellConfig: {
    debug: false,
    networkDelay: 500
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
