/** @noSelfInFile */

export const platform: string;

export function default_sep(platform?: string): string;

export function dev_alias(path: string): string | undefined;

export type PathType = '';

export function type(path: string, platform?: string): PathType;

/**
 * @param path
 * @param platform
 * @tupleReturn
 */
export function parse(path: string, platform?: string): [type: PathType, path: string, driveOrServer: unknown];

export function format(type: PathType, path: string, driveOrServer?: unknown, platform?: string): string;

/**
 * @param path
 * @param platform
 * @tupleReturn
 */
export function isabs(path: string, platform?: string): [is_abs: boolean, is_empty: boolean, is_valid: boolean];

export function endsep(path: string, platform?: string, separator?: string, defaultSeparator?: string): [separator: string, success: boolean];

export function sep(path: string, platform?: string, separator?: string, defaultSeparator?: string, empty_names?: boolean): string;

export function long(path: string, platform?: string, long?: boolean | "auto"): string | undefined;

export function file(path: string, platform?: string): string;

/**
 * @param path
 * @param platform
 * @tupleReturn
 */
export function nameext(path: string, platform?: string): [name: string, ext: string];

export function ext(path: string, platform?: string): string | undefined;

export function dir(path: string, platform?: string): string | undefined;

/**
 * @luaIterator
 * @tupleReturn
 */
interface TupleIterator<T> extends Iterable<T> {}

export function gsplit(path: string, platform?: string, full?: boolean): TupleIterator<[s: string, sep: string]>;

interface NormalizeOptions {
  dot_dirs?: boolean;
  dot_dot_dirs?: boolean;
  sep?: string;
  default_sep?: string;
  empty_names?: boolean;
  endsep?: string;
  long?: boolean | "auto";
}

export function normalize(path: string, platform?: string, opt?): string;

export function commonpath(s1: string, s2: string, platform?: string): string | undefined;

export function depth(path: string, platform?: string): number;

/**
 * @param s1
 * @param s2
 * @param platform
 * @param separator
 * @param defaultSeparator
 * @tupleReturn
 */
export function combine(s1: string, s2: string, platform?: string, separator?: string, defaultSeparator?: string): [path: string, error?: string];

/**
 * @param dir
 * @param path
 * @param platform
 * @param separator
 * @param defaultSeparator
 * @tupleReturn
 */
export function abs(dir: string, path: string, platform?: string, separator?: string, defaultSeparator?: string): [absolutePath: string, error?: string];

export function rel(path: string, workingDirectory?: string, platform?: string, separator?: string, defaultSeparator?: string): string | undefined;

/**
 * Validate a filename or apply a replacement function on it in order to make it valid.
 *
 * @param path
 * @param platform
 * @param repl
 * @tupleReturn
 */
export function filename(path: string, platform?: string, replace?: (this: void) => string | false | undefined): [path: string, error?: string | number];
