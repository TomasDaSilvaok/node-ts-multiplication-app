import { CreateFile } from "../domain/use-cases/create-file.use-case";
import { ShowTable } from "../domain/use-cases/show-table.use-case";

interface RunOptions {
  base: number;
  limit: number;
  showTable: boolean;
  destination: string;
  name: string;
}

export class ServerApp {
  constructor() {}

  static run(options: RunOptions) {
    console.log("executed");
    const { base, limit, showTable, destination, name } = options;

    const table = new ShowTable().execute({ base, limit });

    new CreateFile().execute({
      fileContent: table,
      fileDestination: destination,
      fileName: name,
    });

    if (showTable) console.log(table);
  }
}
