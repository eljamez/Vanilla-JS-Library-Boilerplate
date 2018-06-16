import lib from '../src/Main.js'

const demoPage = () => {
  /**
   * @function init
   * @description calls the lib.init() method
   */
  const init = () => {
    lib.init()
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
