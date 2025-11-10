import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export const yarg = yargs(hideBin(process.argv))
  .option("b", {
    alias: "base",
    demandOption: true,
    describe: "Base multiplication number",
    type: "number",
  })
  .option("l", {
    alias: "limit",
    default: 10,
    type: "number",
    describe: "Limit multiplication number",
  })
  .option("s", {
    alias: "show",
    default: false,
    type: "boolean",
    describe: "Show multiplication table",
  })
  .option("n", {
    alias: "name",
    type: "string",
    default: "table",
    describe: "File name",
  })
  .option("d", {
    alias: "destination",
    default: "outputs",
    type: "string",
    describe: "Destination path",
  })
  .check((argv, options) => {
    if (argv.b <= 0) throw "Base must be greater than 0";
    if (argv.l <= 0) throw "Limit must be greater than 0";

    return true;
  })
  .parseSync();
