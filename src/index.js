import * as counter from "./modules/counter";

const main = (() => {
  const init = () => {
    return "inited";
  };

  return {
    counter,
    init,
  };
})();

export default main;
