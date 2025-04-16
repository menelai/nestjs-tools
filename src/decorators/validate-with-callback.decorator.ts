import {registerDecorator, ValidationArguments, ValidationOptions} from 'class-validator';

export function ValidateWithCallback<T>(values: (object: T) => boolean, validationOptions?: ValidationOptions) {
  return function (object: T, propertyName: string): void {
    registerDecorator({
      name: 'validateWithCallback',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [values],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          return args.constraints[0](args.object);
        },
      },
    });
  };
}
