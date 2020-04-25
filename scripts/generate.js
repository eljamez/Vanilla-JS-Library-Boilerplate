const chalk = require("chalk");
const { prompt } = require("./readline");

const error = chalk.bold.red;
const warning = chalk.keyword("orange");

const truthyAnswer = (ans) => ans.toLowerCase().includes("y", "yes");

const continuePrompt = chalk.yellow(`
    
    Press "return" to continue.
    
    `);

async function displayPrompts() {
  const config = {};

  console.clear();
  console.log(chalk.green(` Welcome to the...`));
  console.log(
    chalk.green(`
  ░▄░░░▄░█▀▀▄░█▀▀▄░░▀░░█░░█░░█▀▀▄░░░░░░▀░█▀▀░░░░█░░░▀░░█▀▀▄░█▀▀▄░█▀▀▄░█▀▀▄░█░░█░░░░█▀▀▄░▄▀▀▄░░▀░░█░░█▀▀░█▀▀▄░▄▀▀▄░█░░█▀▀▄░▀█▀░█▀▀
  ░░█▄█░░█▄▄█░█░▒█░░█▀░█░░█░░█▄▄█░▀▀░░░█░▀▀▄░▀▀░█░░░█▀░█▀▀▄░█▄▄▀░█▄▄█░█▄▄▀░█▄▄█░▀▀░█▀▀▄░█░░█░░█▀░█░░█▀▀░█▄▄▀░█▄▄█░█░░█▄▄█░░█░░█▀▀
  ░░░▀░░░▀░░▀░▀░░▀░▀▀▀░▀▀░▀▀░▀░░▀░░░░█▄█░▀▀▀░░░░▀▀░▀▀▀░▀▀▀▀░▀░▀▀░▀░░▀░▀░▀▀░▄▄▄▀░░░░▀▀▀▀░░▀▀░░▀▀▀░▀▀░▀▀▀░▀░▀▀░█░░░░▀▀░▀░░▀░░▀░░▀▀▀
    `)
  );
  console.log(chalk.green(` Generator`));

  config.name = await prompt(
    chalk.green(`
    What is your name? (${chalk.blue(`Needed to generate package.json`)})
    
    ${chalk.white("")}`)
  );

  console.clear();

  config.packageName = await prompt(
    chalk.green(`
    What is the name of your library?
    
    ${chalk.white("")}`)
  );

  console.clear();

  config.repo = await prompt(
    chalk.green(`
    What is the github (or other) repository URL?
    
    ${chalk.white("")}`)
  );

  console.clear();

  console.log(
    chalk.bold.green(
      `
      
      Congratulations ${config.name || ""}🎉, Your JavaScript Library ${
        config.packageName
      } has been created
      
      `
    )
  );
}

displayPrompts();
