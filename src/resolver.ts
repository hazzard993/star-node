import { cd } from "fs";
import { combine, normalize } from "path";
import { getModuleMappings } from "./utils";

type Loader = (this: void, name: string) => any;

const loaders: Loader[] = globalThis.package.loaders;
const mappings = getModuleMappings();

loaders.push((name) => {
  const wd = cd();

  // First, attempt to resolve as if it were a relative path
  let [fullPath] = combine(wd, normalize(name));
  let file = io.open(fullPath);

  // No? Check the mappings
  if (file === undefined) {
    if (name in mappings) {
      fullPath = mappings[name];
      file = io.open(fullPath);
    }
  }

  if (!file) return;
  return loadfile(fullPath);
});
