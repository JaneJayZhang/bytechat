import { Context, Response } from 'koa';

export class ResponseHandler {
  public static success(ctx: Context, ctxult: any) {
    ctx.status = 200;
    ctx.body = {
      data: ctxult,
    };

    return ctx;
  }

  public static fail(ctx: Context, detail: { code: number; message: string }) {
    ctx.status = detail.code;
    ctx.body = {
      statusCode: detail.code,
      errorMessage: detail.message,
    };
    console.log(ctx);

    return ctx;
  }

  public static validationErrors(ctx: Context, errors: []) {
    ctx.status = 400;
    ctx.body = {
      statusCode: 400,
      errorMessage: errors,
    };

    return ctx;
  }
}
