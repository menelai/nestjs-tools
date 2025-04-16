import {createHash} from 'crypto';

export function sha256(input: string): string {
  const sha256 = createHash('sha256');
  sha256.update(input);
  return sha256.digest('hex');
}
