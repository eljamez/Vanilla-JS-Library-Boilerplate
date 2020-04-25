const chalk = require("chalk");
const { prompt } = require("./readline");

const error = chalk.bold.red;
const warning = chalk.keyword("orange");

const truthyAnswer = (ans) => ans.toLowerCase().includes("y", "yes");

const continuePrompt = chalk.yellow(`
    
    Press "return" to continue.
    
    `);

async function displayPrompts() {
  const config = {
    name: "bob",
  };

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

  config.name =
    (await prompt(
      chalk.green(`
    What is your name? (${chalk.blue(`Needed to generate package.json`)})
    
    ${chalk.white("")}`)
    )) || config.name;

  console.clear();

  config.packageName = await prompt(
    chalk.green(`
    What is the name of your library?
    
    ${chalk.white("")}`)
  );

  console.clear();

  config.description = await prompt(
    chalk.green(`
    Describe ${chalk.magenta(config.packageName)} in one sentence.
    
    ${chalk.white("")}`)
  );

  console.clear();

  config.repo = await prompt(
    chalk.green(`
    What is the github (or other) repository URL?
    
    ${chalk.white("")}`)
  );

  console.clear();

  const useJestAnswer = await prompt(
    chalk.green(`
    Would you like to add ${chalk.magenta(`Jest`)} for unit testing?
    
    y/N: `)
  );

  config.useJest = truthyAnswer(useJestAnswer);

  console.clear();

  console.log(
    chalk.bold.green(
      `
      
      Congratulations ${config.name + " " || ""}🎉, Your JavaScript Library ${
        config.packageName || ""
      }has been created
      
      `
    )
  );
  console.table(config);
}

displayPrompts();
