const chalk = require("chalk");
const { prompt } = require("./readline");
const { generatePackage } = require("./generatePackage");

const truthyAnswer = (ans) => ans.toLowerCase().includes("y", "yes");

async function displayPrompts() {
  const config = {
    name: "bob",
    packageName: "js-pkg",
  };

  console.clear();

  console.log(
    chalk.cyan(`
    Welcome to the...

    ░░░▀░█▀▀░░░░█░░░▀░░█▀▀▄░█▀▀▄░█▀▀▄░█▀▀▄░█░░█░░░░█▀▀▀░█▀▀░█▀▀▄░█▀▀░█▀▀▄░█▀▀▄░▀█▀░▄▀▀▄░█▀▀▄
    ░░░█░▀▀▄░▀▀░█░░░█▀░█▀▀▄░█▄▄▀░█▄▄█░█▄▄▀░█▄▄█░▀▀░█░▀▄░█▀▀░█░▒█░█▀▀░█▄▄▀░█▄▄█░░█░░█░░█░█▄▄▀
    ░█▄█░▀▀▀░░░░▀▀░▀▀▀░▀▀▀▀░▀░▀▀░▀░░▀░▀░▀▀░▄▄▄▀░░░░▀▀▀▀░▀▀▀░▀░░▀░▀▀▀░▀░▀▀░▀░░▀░░▀░░░▀▀░░▀░▀▀

    Cool, Let's get some info...
    
    Much of this is to build your ${chalk.bold.magenta(
      `package.json`
    )} file, which can be changed after generating.`)
  );
  config.name =
    (await prompt(
      chalk.green(`
    What is your name?
    
    ${chalk.white("")}`)
    )) || config.name;

  config.packageName =
    (await prompt(
      chalk.green(`
    What is the name of your package / library?
    
    ${chalk.white("")}`)
    )) || config.packageName;

  config.description = await prompt(
    chalk.green(`
    Describe ${chalk.magenta(config.packageName)} in one sentence.
    
    ${chalk.white("")}`)
  );

  config.repo = await prompt(
    chalk.green(`
    What is the repository URL (Github url) ?
    
    ${chalk.white("")}`)
  );

  const useJestAnswer = await prompt(
    chalk.green(`
    Would you like to use ${chalk.magenta(`Jest`)} for unit testing?
    
    y/N: `)
  );

  config.useJest = truthyAnswer(useJestAnswer);

  const useESLintAnswer = await prompt(
    chalk.green(`
    Would you like to use ${chalk.magenta(`ESLint`)}?
    
    y/N: `)
  );

  config.useESLint = truthyAnswer(useESLintAnswer);

  const useHuskyAnswer = await prompt(
    chalk.green(`
    Would you like to use ${chalk.magenta(`Husky`)} for Pre-commit checks?
    
    y/N: `)
  );

  config.useHusky = truthyAnswer(useHuskyAnswer);

  console.clear();

  generatePackage(config);

  console.log(
    chalk.green(
      `
        
      ${chalk.bold.cyan(`🎉 Congratulations ${config.name} 🎉`)},
      
      Your JavaScript Package ${chalk.bold.cyan(
        config.packageName
      )} has been created in this very repository.

      Next steps include...

      1) adding a remote 
      2) running \`yarn\` and \`yarn start\`
      3) reviewing your README.md
      4) reviewing your demo
      5) editing the code to your specifications
      6) running \`yarn build\`
      7) publishing to NPM

      ENJOY!

      ${chalk.bold.blue(
        `p.s. please consider starring ${chalk.italic(
          `https://github.com/eljamez/Vanilla-JS-Library-Boilerplate`
        )} 😁`
      )}

      ${chalk.bold.blue(
        `Sincerely, James ${chalk.italic(`https://www.jamescript.com`)}`
      )}
      `
    )
  );
}

displayPrompts();
