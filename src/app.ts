import { ServerApp } from "./presentation/server-app";
import { yarg } from "./config/plugins/args.plugin";

(async () => {
  await main();
})();

function main() {
  const { b: base, l: limit, s: showTable, d: destination, n: name } = yarg;

  ServerApp.run({ base, limit, showTable, destination, name });
}
