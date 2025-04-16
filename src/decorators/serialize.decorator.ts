import {
  applyDecorators,
  UseInterceptors,
  ClassSerializerInterceptor,
  SerializeOptions,
} from '@nestjs/common';

export const Serialize = (groups?: string[]): ClassDecorator & MethodDecorator => applyDecorators(
  UseInterceptors(ClassSerializerInterceptor),
  SerializeOptions({groups}),
);
