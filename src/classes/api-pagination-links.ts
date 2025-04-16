import {ApiPropertyOptional} from '@nestjs/swagger';

export class ApiPaginationLinks {
  @ApiPropertyOptional({description: 'Ссылка на первую страницу'})
  first?: string;

  @ApiPropertyOptional({description: 'Ссылка на предыдущую страницу'})
  previous?: string;

  @ApiPropertyOptional({description: 'Ссылка на следующую страницу'})
  next?: string;

  @ApiPropertyOptional({description: 'Ссылка на последнюю страницу'})
  last?: string;
}
