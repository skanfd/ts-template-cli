import chalk from "chalk";
import { program } from "commander";
import { version, name } from "../package.json";
import cmds from "./commands";

console.time("Time");
process.on("exit", () => {
  console.timeEnd("Time");
});

console.log(chalk.blueBright(name), "version", version);

program.version(version);

program
  .command("dev")
  .alias("d")
  .description("develop command")
  .action(() => {
    cmds.dev();
  });

program.parse(process.argv);
