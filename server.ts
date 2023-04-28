import { App } from './app';
import { APP_PORT } from '@/config/default';
import { sequelize } from '@/config/connnection';
import { UserController } from '@/controller/UserController';
import { AuthController } from '@/controller/AuthController';

const app = new App({
  port: APP_PORT || 3000,
  controllers: [new AuthController(), new UserController()],
});

(async () => {
  await sequelize.sync({ force: true });

  app.listen();
})();
