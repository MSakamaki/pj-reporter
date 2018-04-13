import { statSync } from 'fs';
import { mkdirp } from 'fs-extra';
import { dirname } from 'path';

export const isExistsFile = (path: string) => {
  try {
    return statSync(path).isFile();
  } catch {
    return false;
  }
};

export const MakeDir = (filePath: string) => mkdirp(dirname(filePath));
