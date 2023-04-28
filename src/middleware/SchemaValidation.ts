import { Context, Next } from 'koa';
import { Schema } from 'joi';
import { ResponseHandler } from '@/helpers/ResponseHandler';

export const SchemaValidate = (schema: Schema) => {
  return async (ctx: Context, next: Next) => {
    const user = ctx.body;
    const response = schema.validate(user, { abortEarly: false });
    const errors: [] | null = validationResponse(response);
    if (errors) {
      ResponseHandler.validationErrors(ctx, errors);
    } else {
      await next();
    }
  };
};

const validationResponse = (result: any) => {
  if (result && result.error && result.error.details && result.error.details.length > 0) {
    const errorMessage = result.error.details.map((error: any) => {
      const message = error.message;
      const errorObj = { detail: message.replace(/['"]+/g, '') };
      return errorObj;
    });
    return errorMessage;
  }
  return null;
};
