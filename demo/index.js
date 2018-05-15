import lib from '../src/Main.js'

const demoPage = () => {
  /**
   * @function init
   * @description calls the lib.init() method
   */
  const init = () => {
    lib.init({
      source: 'SRCi', // application that will utilize this component
      appVersion: '1.8.0-12fasfkl', // application version plus git commit
      loggerConsoleLevels: 'error, warn, debug, info', // options `error,warn,info,debug`, string or array
      loggerRemoteLevels: ['error', 'info', 'debug'], // options `error,warn,info,debug`,  string or array
      loggerRemoteWaitTime: 1000, // miliseconds to queue remote logs before sending them remotely
      loggerRemoteMaxMsgs: 10 // maximum logs to hold before sending to remote server
    })
  }

  init()
}

demoPage()

/*
 * Hot module replacment for development
 */
if (module.hot) {
  module.hot.accept(['../src/Main.js'], () => {})
}
