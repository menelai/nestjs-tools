import {Query, ValidationPipe} from '@nestjs/common';
import {ValidationPipeOptions} from '@nestjs/common/pipes/validation.pipe';

/**
 * Парсит и валидирует гет-параметры
 */
export const QueryWithValidation = (opts?: ValidationPipeOptions): ParameterDecorator => Query(new ValidationPipe({
  ...opts,
  transform: true,
  whitelist: true,
}));
