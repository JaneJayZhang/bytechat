import Koa from 'koa';
import Router from 'koa-router';
import koaBody from 'koa-body';

import { staticFilePath } from '@/helpers/constants';

export class App {
  public app: Koa;
  public router: Router;
  public port: any;

  constructor(appInit: { port: any; controllers: Array<any> }) {
    this.app = new Koa();
    this.router = new Router();
    this.port = appInit.port;
    this.koaBody();
    this.routes(appInit.controllers);
  }

  private routes(controllers: Array<any>) {
    controllers.forEach((controller) => {
      this.app.use((<Router>controller.router).routes());
    });
  }

  private koaBody() {
    this.app.use(
      koaBody({
        multipart: true,
        formidable: {
          uploadDir: staticFilePath,
          keepExtensions: true,
          maxFieldsSize: 2 * 1024 * 1024,
        },
      })
    );
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`server is running on http://localhost:${this.port}`);
    });
  }
}
