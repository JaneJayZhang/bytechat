import { ResponseHandler } from '@/helpers/ResponseHandler';
import { ControllerBase } from '@/interfaces/ControllerBase';
import { SchemaValidate } from '@/middleware/SchemaValidation';
import { User } from '@/models/User';
import { AuthService } from '@/services/AuthService';
import { UserService } from '@/services/UserService';
import { createUser, loginUser } from '@/validation/UserSchema';
import { Context } from 'koa';
import Router from 'koa-router';

export class AuthController implements ControllerBase {
  public path = '/auth';
  public router = new Router();
  public userService: UserService;
  public authService: AuthService;

  constructor() {
    this.initRoutes();
    this.userService = new UserService();
    this.authService = new AuthService();
  }
  public initRoutes() {
    this.router.post(`${this.path}/login`, SchemaValidate(loginUser), this.login);
    this.router.post(`${this.path}/signup`, SchemaValidate(createUser), this.signup);
  }

  login = async (ctx: Context) => {
    const requestUser = <User>ctx.request.body;
    console.log({ requestUser });

    const result = await this.authService.loginUser(requestUser);
    if (result.success) {
      ResponseHandler.success(ctx, result.getValue());
    } else {
      ResponseHandler.fail(ctx, result.getError());
    }
  };

  signup = async (ctx: Context) => {
    const requestUser = ctx.request.body;

    const response = await this.userService.createUser(requestUser);
    if (response.success) {
      ResponseHandler.success(ctx, response.getValue());
    } else {
      ResponseHandler.fail(ctx, response.getError());
    }
  };
}
