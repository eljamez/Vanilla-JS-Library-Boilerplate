const Main = ((props) => {

  /** @function init
   *  @param {Object} options - Initialization options that is needed by this component
   *  @returns {Object} - returns the options that have been set
   *  @description Initiate your library with options
   */
  const init = (options) => {
    return {
      options,
      props
    }
  }

  return {
    init
  }
})(props)

export default Main
