const prettier = require("prettier");

function prettify({ content, parser = "babel", onError = () => {} }) {
  return new Promise((resolve) => {
    prettier
      .resolveConfig(__filename)
      .then((options) => {
        const data = prettier.format(content, { ...options, parser });
        resolve(data);
      })
      .catch((e) => onError(e));
  });
}

module.exports = {
  prettify,
};
