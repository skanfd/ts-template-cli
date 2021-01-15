import chalk from "chalk";

export default {
  info(...args: any) {
    console.info(chalk.bgBlue(" INFO "), ...args);
  },
  good(...args: any) {
    console.log(chalk.bgGreen(" GOOD "), ...args);
  },
  warn(...args: any) {
    console.warn(chalk.bgRedBright(" WARN "), ...args);
  },
  fail(...args: any) {
    console.info(chalk.bgRed(" FAIL "), ...args);
  },
};
