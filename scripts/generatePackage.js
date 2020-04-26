const path = require("path");
const fs = require("fs");
const chalk = require("chalk");

const templates = require("./templates");
const { prettify } = require("./prettify");

async function generateFile({
  config,
  directoryPath,
  filePath,
  template,
  parser = "babel",
}) {
  console.log(chalk.green(`    Generating ${chalk.magenta(filePath)}`));
  const content =
    typeof templates[template] === "string"
      ? templates[template]
      : templates[template](config);

  const contentString =
    typeof content === "object" ? JSON.stringify(content) : content;
  const prettyFile =
    parser === "none"
      ? content
      : await prettify({
          content: contentString,
          parser,
          onError: (e) => {
            console.error(
              chalk.red(`
    Prettier failed to prettify ${chalk.white(filePath)}.
    
    ${e}`)
            );
          },
        });
  fs.writeFileSync(path.resolve(directoryPath, filePath), prettyFile);
}

function generatePackage(config) {
  const directoryPath = path.resolve("./newSrc");
  fs.mkdirSync(directoryPath);
  fs.mkdirSync(path.resolve(directoryPath, "modules"));
  fs.mkdirSync(path.resolve(directoryPath, "__tests__"));

  generateFile({
    config,
    directoryPath,
    filePath: "test.js",
    template: "test",
    parser: "none",
  });

  generateFile({
    config,
    directoryPath,
    filePath: "jest.config.js",
    template: "jestConfig",
  });

  return;

  generateFile({
    config,
    directoryPath,
    filePath: ".npmrc",
    template: "npmrc",
    parser: "none",
  });

  generateFile({
    config,
    directoryPath,
    filePath: "jest.config.js",
    template: "jestConfig",
  });

  generateFile({
    config,
    directoryPath,
    filePath: "package.json",
    template: "packageJsonObject",
    parser: "json",
  });

  generateFile({
    config,
    directoryPath,
    filePath: "src/MyComponent.tsx",
    template: "srcFile",
  });

  generateFile({
    config,
    directoryPath,
    filePath: "src/styles/MyComponent.scss",
    template: "scssFile",
    parser: "scss",
  });

  generateFile({
    config,
    directoryPath,
    filePath: "src/__tests__/MyComponent_spec.tsx",
    template: "testFile",
  });

  if (config.useStorybook) {
    fs.mkdirSync(path.resolve(directoryPath, "src/__stories__"));
    generateFile({
      config,
      directoryPath,
      filePath: "src/__stories__/MyComponent.story.tsx",
      template: "storyFile",
    });
  }

  generateFile({
    config,
    directoryPath,
    filePath: "exports/MyComponent.ts",
    template: "exportFile",
  });

  console.log("");
}

module.exports = {
  generatePackage,
};
