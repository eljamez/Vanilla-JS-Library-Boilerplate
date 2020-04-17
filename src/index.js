import * as counter from './modules/Counter'

const main = (() => {
  const init = () => {
    return 'inited'
  }

  return {
    counter,
    init
  }
})()

export default main
