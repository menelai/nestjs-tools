import {Body, ParseArrayPipe, Type} from '@nestjs/common';
import {ValidationPipeOptions} from '@nestjs/common/pipes/validation.pipe';

/**
 * Парсит и валидирует тело запроса, которе массив
 */
export const BodyArrayWithValidation = (items: Type<any>, opts?: ValidationPipeOptions): ParameterDecorator => Body(
  new ParseArrayPipe({items, whitelist: true, ...opts}),
);
