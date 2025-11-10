interface ShowTableUseCase {
  execute: (opritons: Options) => string;
}

interface Options {
  base: number;
  limit: number;
}

export class ShowTable implements ShowTableUseCase {
  constructor() {}

  execute({ base, limit = 10 }: Options): string {
    let table = "";

    for (let i = 1; i <= limit; i++) {
      table += `${base} x ${i} = ${base * i}\n`;
    }

    return table;
  }
}
