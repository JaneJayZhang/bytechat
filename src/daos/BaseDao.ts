import { Result } from '@/helpers/Result';
import { CommonCrud, ReponseResult } from '@/interfaces/CommonCrud';
import { QueryParams } from '@/interfaces/QueryParams';

export abstract class BaseDao<Model> implements CommonCrud<Model> {
  public readonly model;

  constructor(model: any) {
    this.model = model;
  }

  async create(model: Model): ReponseResult<Model> {
    try {
      const response = await this.model.create(model);
      return Result.ok(response);
    } catch (ex: any) {
      return Result.fail(ex.message);
    }
  }

  async update(id: string | number, model: Model): ReponseResult<any> {
    try {
      const response = await this.model.update(model, {
        where: { id },
      });
      return Result.ok(response);
    } catch (ex: any) {
      return Result.fail(ex.message);
    }
  }

  async delete(id: string | number): ReponseResult<any> {
    try {
      const response = await this.model.destory({
        where: { id },
      });
      return Result.ok(response);
    } catch (ex: any) {
      return Result.fail(ex.message);
    }
  }

  async find(params: QueryParams): ReponseResult<Model[]> {
    try {
      const { where, attributes, include, offset, limit } = params;
      const findObj = { offset, limit };

      where && Object.assign(findObj, where);
      attributes && Object.assign(findObj, attributes);
      include && Object.assign(findObj, include);

      const response = await this.model.findAll(findObj);
      return Result.ok(response);
    } catch (ex: any) {
      return Result.fail(ex.message);
    }
  }

  async findOne(id: string | number): ReponseResult<Model> {
    try {
      const doc = await this.model.findOne({
        where: { id },
      });

      if (!doc) {
        return Result.fail('Not fount');
      }
      return Result.ok(doc);
    } catch (ex: any) {
      return Result.fail(ex.message);
    }
  }
}
