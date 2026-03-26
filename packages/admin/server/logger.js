import chalk from "chalk";

const timestamp = () =>
  new Date().toLocaleTimeString("en-US", { hour12: false });

const log = {
  info: (msg) =>
    console.log(`${chalk.gray(timestamp())} ${chalk.cyan("[INFO]")} ${msg}`),
  success: (msg) =>
    console.log(`${chalk.gray(timestamp())} ${chalk.green("[OK]")} ${msg}`),
  warn: (msg) =>
    console.log(`${chalk.gray(timestamp())} ${chalk.yellow("[WARN]")} ${msg}`),
  error: (msg) =>
    console.log(`${chalk.gray(timestamp())} ${chalk.red("[ERR]")} ${msg}`),
  server: (msg) =>
    console.log(`${chalk.gray(timestamp())} ${chalk.magenta("[MSG]")} ${msg}`),
};

export default log;
