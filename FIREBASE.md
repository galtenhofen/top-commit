# Prepare assets to deploy
Before deploying the app to Firebase Hosting, run `ionic build --prod`

# Multiple Environments with Firebase
For managing one site across different environments, we recommend multiple projects for promoting best practices of each environment having its own set of Firebase resources.

For example for this repo we will have two firebase projects:
- dev-ion4fullpwa
- ion4fullpwa

## Check available alias
Before deploying to Firebase Hosting make sure you are using the correct alias (dev, prod)
`firebase use` will list all the alias available
```
* dev (dev-ion4fullpwa)
  prod (ion4fullpwa)
  pro (pro-ion4fullpwa)
```

## Create alias
If you don't see these alias (dev, prod), you should create them
`firebase use --add`
```
? Which project do you want to add? ion4fullpwa
? What alias do you want to use for this project? (e.g. staging) prod
```

## Select alias (switching environments)
`firebase use dev`

You can also use the `-P` flag to specify an alias like this:
`firebase deploy -P dev`

This will deploy to the `dev` alias/environment

## Serve and test your Firebase project locally
For more info see: https://firebase.google.com/docs/hosting/deploying
`firebase serve --only hosting`
