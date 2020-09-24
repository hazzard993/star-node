import * as path from "path";
import { cd, dir } from "fs";
import { DirIterator } from "./typings/fs";

function findPackageDotJsonDirectory(): string | undefined {
  let parentDirectory = cd();
  while (parentDirectory) {
    let containsPackageDotJson = false;
    for (const [name] of dir(parentDirectory)) {
      if (typeof name === "string" && name === "package.json") {
        containsPackageDotJson = true;
      }
    }
    if (containsPackageDotJson) break;
    parentDirectory = path.dir(parentDirectory);
  }
  return parentDirectory;
}

type RockSpec = {
  build: Build;
};

type Build = {
  type: string;
  modules: Modules;
};

type Modules = Record<string, string>;

function readRockSpec(contents: string): RockSpec {
  const f = loadstring(contents);
  setfenv(f, {});
  f();
  return getfenv(f);
}

function findRockSpec(moduleDirectory: DirIterator): string | undefined {
  for (const [fileName, d] of dir(moduleDirectory.path())) {
    if (typeof fileName === "string" && typeof d !== "string") {
      const extension = path.ext(fileName);
      if (extension === "rockspec") {
        return d.path();
      }
    }
  }
}

function findFileWithName(name: string, moduleDirectory: DirIterator): string | undefined {
  for (const [fileName, d] of dir(moduleDirectory.path())) {
    if (typeof fileName === "string" && typeof d !== "string") {
      const [fileBaseName] = path.nameext(fileName);
      if (fileBaseName === name) {
        return d.path();
      }
    }
  }
}

export function getModuleMappings(): Record<string, string> {
  const mappings: Record<string, string> = {};

  const projectDirectory = findPackageDotJsonDirectory();
  if (projectDirectory) {
    const [nodeModulesDirectory] = path.combine(projectDirectory, "node_modules");
    if (nodeModulesDirectory) {
      for (const [moduleName, moduleDirectory] of dir(nodeModulesDirectory)) {
        if (typeof moduleDirectory !== "string") {
          const rockSpec = findRockSpec(moduleDirectory);
          if (rockSpec) {
            const file = io.open(rockSpec);
            const contents = file.read("*a");
            file.close();
            const spec = readRockSpec(contents);
            Object.keys(spec.build.modules).forEach(key => {
              const relativePath = spec.build.modules[key];
              const [fullPath] = path.combine(moduleDirectory.path(), path.normalize(relativePath));
              mappings[key] = fullPath;
            });
          } else if (moduleName !== false) {
            const filePath = findFileWithName(moduleName, moduleDirectory);
            if (filePath) {
              mappings[moduleName] = filePath;
            }
          }
        }
      }
    }
  }

  return mappings;
}
