import chalk from "chalk";

function timestamp() {
  return new Date().toLocaleTimeString("en-GB", { hour12: false });
}

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
    console.log(
      `${chalk.gray(timestamp())} ${chalk.magenta.bold("[SERVER]")} ${msg}`,
    ),
};

export default log;
