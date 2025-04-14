import {Body, ValidationPipe, ValidationPipeOptions} from '@nestjs/common';

import {TrimPipe} from '@/decorators/trim.pipe';

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
