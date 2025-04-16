import {ApiUnauthorizedResponse as NestApiUnauthorizedResponse} from '@nestjs/swagger';

import {ApiErrorResponse} from '@/classes';

export const ApiUnauthorizedResponse = (description = 'Пользователь не авторизован'): MethodDecorator & ClassDecorator => NestApiUnauthorizedResponse({
  description,
  type: ApiErrorResponse,
});
