import {ApiProperty} from '@nestjs/swagger';
import {Type} from 'class-transformer';
import {IsInt, IsPositive, Min} from 'class-validator';

export class ApiPaginationQuery {
  @ApiProperty({description: 'Страница, нумерация с 1'})
  @Type(() => Number)
  @IsPositive()
  @IsInt()
  page: number;

  @ApiProperty({description: 'Количество элементов на странице'})
  @Type(() => Number)
  @Min(0)
  @IsInt()
  limit: number;
}
