import * as fs from "fs";

interface CreateFileUseCase {
  execute: ({ fileContent, fileName, fileDestination }: FileOptions) => boolean;
}

interface FileOptions {
  fileContent: string;
  fileName?: string;
  fileDestination?: string;
}

export class CreateFile implements CreateFileUseCase {
  constructor() {}

  execute({
    fileContent,
    fileDestination = "outputs",
    fileName = "table",
  }: FileOptions): boolean {
    try {
      fs.mkdirSync(fileDestination, { recursive: true });
      fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent);
      return true;
    } catch (error) {
      console.error("File not created!", error);
      return false;
    }
  }
}
