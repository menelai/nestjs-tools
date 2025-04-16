import {ApiProperty} from '@nestjs/swagger';

export class ApiPaginationMeta {
  @ApiProperty({description: 'Количество элементов в массиве (меньше или равно размеру страницы)'})
  itemCount: number;

  @ApiProperty({description: 'Общее количество элементов в коллекции'})
  totalItems?: number;

  @ApiProperty({description: 'Количество элементов на странице'})
  itemsPerPage: number;

  @ApiProperty({description: 'Общее количество страниц'})
  totalPages?: number;

  @ApiProperty({description: 'Номер текущей страницы'})
  currentPage: number;
}
