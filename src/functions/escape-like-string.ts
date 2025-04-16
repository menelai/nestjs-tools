export function escapeLikeString(src: string): string {
  return src.replace(/[\\%_]/g, match => '\\' + match);
}
