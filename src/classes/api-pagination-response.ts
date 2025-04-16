import {ApiProperty, ApiPropertyOptional} from '@nestjs/swagger';

import {ApiPaginationLinks} from '@/classes/api-pagination-links';
import {ApiPaginationMeta} from '@/classes/api-pagination-meta';

export class ApiPaginationResponse<T> {

  @ApiProperty({description: 'Метаинформация о пагинации', type: ApiPaginationMeta})
  meta: ApiPaginationMeta;

  @ApiPropertyOptional({description: 'Ссылки', type: ApiPaginationLinks})
  links?: ApiPaginationLinks;

  @ApiProperty({description: 'Список'})
  items: T[];
}
