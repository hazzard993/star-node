/** @noSelfInFile */

interface OpenOptions {
  access
}

export function open(path: string, mode?: string): File;

export interface File {
  close(): void;
  closed(): boolean;
  stream(mode);
  read(buf, len): number;
  write(buf, len): number;
  flush();
  seek(whence?, offset?): number;
  truncate(opt?): void;
  attr(attr?: string | object): any;
}

export function isfile(f: any): f is File;

/**
 * @tupleReturn
 */
export function pipe(): [rf: File, wf: File];

interface PipeOptions {
  path: string;
  opt: unknown;
}

export function pipe(opts: PipeOptions);
export function pipe(path: string, opts?);

export function waitpipe(path: string): void;

export function close(): void;

export function open_buffer(buf, size?, mode?): File;

/**
 * @luaIterator
 * @tupleReturn
 */
interface DirIteratorResult extends Iterable<[name: string, d: DirIterator] | [name: false, err: string, errcode: number] | []> {}

export interface DirIterator {
  next(): DirIteratorResult;
  close(): void;
  closed(): boolean;
  name(): string;
  dir(): string;
  path(): string;
  attr(attr?, deref?): any;
  is(type, deref?): boolean;
}

export function dir(dir?: string, dots_dir?: boolean): DirIteratorResult;

export function mkdir(path: string, recursive?, perms?): void;

export function cd(path?): string;

export function remove(path: string, recursive?: boolean): void;

export function move(path: string, newpath: string, opt?): void;

export function mksymlink(symlink, path, is_dir): void;

export function mkhardlink(hardlink, path): void;

export function readlink(path): string;

export function homedir(): string;

export function tmpdir(): string;

export function exepath(): string;

export function exedir(): string;

export function wrap_handle(handle): File;

export function wrap_fd(fd): File;

export function wrap_file(file): File;

export function fileno(file);