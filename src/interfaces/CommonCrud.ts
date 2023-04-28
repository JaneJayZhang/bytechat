import { Result } from '@/helpers/Result';
import { QueryParams } from './QueryParams';

export type ReponseResult<M = any> = Promise<Result<M | undefined>>;

export interface CommonCrud<M> {
  create(model: M): ReponseResult<M>;
  update(id: string | number, model: M): ReponseResult<M>;
  delete(id: string | number): ReponseResult<M>;
  find(params: QueryParams): ReponseResult<Array<M>>;
  findOne(id: string | number): ReponseResult<M>;
}
