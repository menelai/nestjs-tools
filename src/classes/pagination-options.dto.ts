import {ApiProperty} from '@nestjs/swagger';
import {Type} from 'class-transformer';
import {IsInt, Min} from 'class-validator';

export class PaginationOptions {
  @ApiProperty({description: 'Номер страницы'})
  @IsInt()
  @Min(1)
  @Type(() => Number)
  readonly page: number;

  @ApiProperty({description: 'Число элементов на страницу, 0 для безлимитного получения'})
  @IsInt()
  @Min(0)
  @Type(() => Number)
  readonly limit: number;
}
