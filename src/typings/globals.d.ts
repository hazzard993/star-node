/** @noSelfInFile */

declare namespace io {
  interface File {
    read(amt: "*a"): string;
    close(): void;
  }

  function open(filename: string): File | undefined;
}

declare function loadstring(s: string): (this: void) => void;
declare function loadfile(fileName: string): (this: void) => void;

declare function setfenv(n: number | Function, table: object): void;
declare function getfenv(n?: number | Function): any;

declare module "fs" {
  const fs: typeof import("./fs");
  export = fs;
}

declare module "path" {
  const path: typeof import("./path");
  export = path;
}
