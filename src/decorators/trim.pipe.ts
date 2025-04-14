import {ArgumentMetadata, Injectable, PipeTransform} from '@nestjs/common';
import {isObject} from 'class-validator';

@Injectable()
export class TrimPipe implements PipeTransform {
  /**
   * скроим
   */
  static readonly safeFields = ['password', 'passwordConfirmation'];

  static readonly maxDepth = 10;

  transform(value: unknown, metadata: ArgumentMetadata): any {
    const {type} = metadata;

    if (isObject(value) && type === 'body') {
      return this.trim(value as Record<string, unknown>);
    }

    return value;
  }

  private trim(object: Record<string, unknown>, depth = 0): Record<string, unknown> {
    for (const key of Object.keys(object)) {
      if (isObject(object[key])) {
        if (depth < TrimPipe.maxDepth) {
          object[key] = this.trim(object[key] as Record<string, unknown>, depth + 1);
        }
      } else if (!TrimPipe.safeFields.includes(key) && typeof object[key] === 'string') {
        object[key] = (object[key] as string).trim();
      }
    }

    return object;
  }
}
