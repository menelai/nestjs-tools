import {paginate as p, Pagination, PaginationTypeEnum} from 'nestjs-typeorm-paginate';
import {SelectQueryBuilder} from 'typeorm';

import {PaginationOptions} from '@/classes/pagination-options.dto';

export async function paginate<T>(
  builder: SelectQueryBuilder<T>,
  pagination: PaginationOptions,
  callbackAfterCount?: () => void | Promise<void>,
): Promise<Pagination<T>> {
  const totalItems = pagination.limit === 0 ? 0 : await builder.getCount();

  // Чтобы не запрашивать, когда ничего не найдено
  if (totalItems === 0 && pagination.limit) {
    return {
      items: [],
      meta: {
        currentPage: pagination.page,
        itemCount: 0,
        itemsPerPage: pagination.limit,
        totalItems,
        totalPages: 1,
      },
    } as Pagination<T>;
  }

  await callbackAfterCount?.();

  return p<T>(builder, {
    ...pagination,
    paginationType: PaginationTypeEnum.TAKE_AND_SKIP,
    countQueries: false,
    metaTransformer: ({currentPage, itemCount, itemsPerPage}) => {
      const totalPages = Math.ceil(totalItems / itemsPerPage);
      return {
        currentPage,
        itemCount,
        itemsPerPage,
        totalItems,
        totalPages: Math.max(totalPages, 1),
      };
    },
  });
}
