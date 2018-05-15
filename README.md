# 🐺 Frontend Web Logger

logging library shared across SRCi and DCF components

## Getting Started (Development)

Clone and run

` yarn `

after your dependencies have been uploaded, start the server to view the demo page at localhost:8031

` yarn start `

This includes hot module replacement so your changes should be seen right away.

To build the dist folder for production, use...

` yarn build `

For production and local testing while using ` Yarn Link `, be sure to build the dist folder.

## Testing

Jest is used for testing

` yarn test `

Test specific file

` yarn test [filename(without the .js)] `

And you can watch with both by using

` --watch `

___

## Add library to Vue (Usage)

This library is primarily for use with SRCi and DCF, these instructions assume Vue is the framework consuming the library.

**Steps for adding to project**

- Add the logging library to your dependencies in `package.json`

  ```
  "dependencies": {
    "frontend-web-logger":"git+https://globalrepository.mclocal.int/stash/scm/ALBERTA/frontend-web-logger.git#VERSION_NUMBER"
  }
  ```

- create `logger/index.js` folder within the `src` folder

- 3 main things need to be in `index.js`

  ```
  import logger from 'frontend-logger'

  // set the library paramaters
  const loggingLibraryParams = {
    source: 'SRCi', // SRCi or DCF
    appVersion: 1.2345, // app version and commit id
    loggerConsoleLevels: 'info, debug', // comma delimited list, could come from external source, accepts 'info, debug, error, warn'
    loggerRemoteLevels: 'info', // same as above
    loggerRemoteWaitTime: 5000, // wait time for debounce in ms
    loggerRemoteMaxMsgs: 20 // max number of message in single remote log call
  }

  // create the Vue plugin for the logging library
  export default {
    install: (Vue, name = '$logger') => {
      logger.init(loggingLibraryParams) // sets the logger setting right away
      Object.defineProperty(Vue.prototype, name, { value: logger }) // make the library globall accessable
    }
  }
  ```

- in `main.js` (or where ever Vue is instantiated). you will need to add the following:

  ```
  import logger from './logger'

  Vue.use(logger, '$logger')
  ```

Now the logging library will be available globally throughout all components of the app. Using the logger's methods requires
calling `this.$logger`. For example, to call the `info()` method, instead of just calling `logger.info(obj)`, you will now
need to call `this.$logger.info(obj)`. The methods should work the same as shown below.

## Public API / Methods (Usage)

### logger.init(Object)

**logger.init()** accepts an object of defined paramaters that adjust the settings of the logger.

```
logger.init({
    source: 'SRCi || DCF', // application that will utilize this component
    appVersion: '1.8.0-12fasfkl', // application version plus git commit
    loggerConsoleLevels: configBundle.loggerConsoleLevels, // which logs to send to console `error,warn,info,debug`
    loggerRemoteLevels: configBundle.loggerRemoteLevels, // which logs to send to remote `error,warn,info,debug`
    loggerRemoteWaitTime: 300, // milliseconds to queue remote logs before sending the
    loggerRemoteMaxMsgs: 20, // maximum logs to hold before sending to remote server
})
```

### logger.info(Object)

**logger.info()** accepts logging data, for example:

```
logger.info({
    message: 'Welcome Page signup button is clicked',
    event: 'buttonClicked.Welcome.SignUp'
})
```

### logger.error(Object)

**logger.error()** accepts logging data, for example:

```
logger.error({
    message: 'paymentCard service error',
    event: 'networkCall:paymentCardService'
})
```

### logger.warn(Object)

**logger.warn()** accepts logging data, for example:

```
logger.warn({
    message: 'Welcome Page signup button is disabled',
    event: 'buttonClicked.Welcome.SignUp'
})
```

### logger.debug(Object)

**logger.debug()** accepts logging data, for example:

```
logger.debug({
    event: 'pageTransition',
    toPage: 'Two Factor Authentication',
    endTime: Date.now()
})
```

### logger.setAppStartTime(Number)

**logger.setAppStartTime()** will usually be passed Date.now() to set the time upon starting the app.

```
  logger.setAppStartTime(Date.now())
```

### logger.getAppStartTime()

**logger.getAppStartTime()** will return saved appStartTime.

```
  logger.getAppStartTime() // returns appStartTime
```

### logger.clearAppStartTime()

**logger.clearAppStartTime()** will set the appStartTime to 0.

```
  logger.clearAppStartTime() // sets appStartTime to 0
```

### logger.setPageTransition(Object)

**logger.setPageTransition()** will accept an Object that contains the time and origin of a page transition
and will set that data to be used later.

```
logger.setPageTransitionInfo({
    fromPage: 'Sign In',
    startTime: Date.now()
})
```

Since we are watching a page transition, upon the new page being fully loaded we will want to call
something like this...

```
logger.info({
  event: 'pageTransition',
  toPage: 'Two Factor Authentication',
  endTime: Date.now()
})
```

Since the logger now has start time and origin, it can pass the proper data to the console and/or the remote logging service.

More Resources:

- [Confluence: Alberta Front End Remote Logging](https://fusion.mastercard.int/confluence/display/alberta/Alberta+Front+End+Remote+Logging "Alberta Front End Remote Logging")
