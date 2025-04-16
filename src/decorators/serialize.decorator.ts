import {
  applyDecorators,
  ClassSerializerContextOptions,
  ClassSerializerInterceptor,
  SerializeOptions,
  UseInterceptors,
} from '@nestjs/common';

export const Serialize = (options: ClassSerializerContextOptions = {}): ClassDecorator & MethodDecorator => applyDecorators(
  UseInterceptors(ClassSerializerInterceptor),
  SerializeOptions(options),
);
