import {Body, ValidationPipe, ValidationPipeOptions} from '@nestjs/common';

import {TrimPipe} from '@/classes';

/**
 * Парсит и валидирует тело запроса.
 */
export const BodyWithValidation = (opts?: ValidationPipeOptions): ParameterDecorator => Body(
  new TrimPipe(),
  new ValidationPipe({
    ...opts,
    whitelist: true,
  }),
);
