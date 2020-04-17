import lib from "../src/index.js";

const demoPage = () => {
  const incrementButton = document.getElementById("incrementButton");
  const decrementButton = document.getElementById("decrementButton");
  const count = document.getElementById("count");

  /**
   * @function init
   * @description calls the lib.init() method
   */
  const init = () => {
    lib.init();
  };

  lib.counter.setCount(0);
  count.innerText = lib.counter.getCount();

  incrementButton.addEventListener("click", () => {
    lib.counter.increment();
    count.innerText = lib.counter.getCount();
  });

  decrementButton.addEventListener("click", () => {
    lib.counter.decrement();
    count.innerText = lib.counter.getCount();
  });

  init();
};

demoPage();

/*
 * Hot module replacment for development
 */
if (module.hot) {
  module.hot.accept(["../src/index.js"], () => {});
}
