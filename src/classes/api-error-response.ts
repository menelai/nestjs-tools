import {ApiProperty} from '@nestjs/swagger';

export class ApiErrorResponse {

  @ApiProperty({
    description: 'HTTP-код ошибки, например 400 или 500',
    example: 403,
  })
  readonly statusCode: number;

  @ApiProperty({
    description: 'Название ошибки - Bad Request, Internal Server Error',
    example: 'Forbidden',
  })
  readonly error: string;

  @ApiProperty({
    description: 'Сообщение клиенту API',
    example: 'Нет прав на выполнение этой операции',
  })
  readonly message: string;
}
