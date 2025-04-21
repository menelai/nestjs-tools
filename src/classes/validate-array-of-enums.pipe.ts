import {BadRequestException, PipeTransform} from '@nestjs/common';
import {isArray, isEnum} from 'class-validator';

export class ValidateArrayOfEnumsPipe<T> implements PipeTransform<T[], T[]> {

  constructor(private enumType: T) { }

  transform(value: T[]): T[] {
    if (!isArray(value) || !value.every(v => isEnum(v, this.enumType))) {
      throw new BadRequestException('Array of enums expected');
    }
    return value as T[];
  }
}
