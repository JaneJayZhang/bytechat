import { Context } from 'koa';
import Router from 'koa-router';

import { ControllerBase } from '@/interfaces/ControllerBase';
import { UserService } from '@/services/UserService';
import { ResponseHandler } from '@/helpers/ResponseHandler';
import { User } from '@/models/User';

export class UserController implements ControllerBase {
  public path = '/users';
  public router = new Router();
  public userService: UserService;

  constructor() {
    this.initRoutes();
    this.userService = new UserService();
  }

  public initRoutes() {
    this.router.get(`${this.path}/:id`, this.getById);
    this.router.patch(`${this.path}/:id`, this.update);
    this.router.delete(`${this.path}/:id`, this.delete);
  }

  getById = async (ctx: Context) => {
    const { id } = ctx.params;
    if (id) {
      const response = await this.userService.getUserById(id);

      if (!response.success) {
        ResponseHandler.fail(ctx, response.getError());
      } else {
        ResponseHandler.success(ctx, response.getValue());
      }
    } else {
      ResponseHandler.fail(ctx, { message: 'Bad Request', code: 400 });
    }
  };

  update = async (ctx: Context) => {
    const { id } = ctx.params;
    if (id) {
      const response = await this.userService.getUserById(id);

      if (response.success) {
        const reqBody = <User>ctx.body;
        const result = await this.userService.updateUser(id, reqBody);
        ResponseHandler.success(ctx, result.getValue());
      } else {
        ResponseHandler.fail(ctx, response.getError());
      }
    } else {
      ResponseHandler.fail(ctx, { message: 'Bad Request', code: 400 });
    }
  };

  delete = async (ctx: Context) => {
    const { id } = ctx.params;
    if (id) {
      const response = await this.userService.getUserById(id);
      if (response.success) {
        const result = await this.userService.deleteUser(id);
        ResponseHandler.success(ctx, result.getValue());
      } else {
        ResponseHandler.fail(ctx, response.getError());
      }
    } else {
      ResponseHandler.fail(ctx, { message: 'Bad Request', code: 400 });
    }
  };
}
