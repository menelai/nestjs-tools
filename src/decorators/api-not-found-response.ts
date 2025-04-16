import {ApiNotFoundResponse as NestApiNotFoundResponse} from '@nestjs/swagger';

import {ApiErrorResponse} from '@/classes';

export const ApiNotFoundResponse = (description = 'Запрашиваемый ресурс не найден'): MethodDecorator & ClassDecorator => NestApiNotFoundResponse({
  description,
  type: ApiErrorResponse,
});
