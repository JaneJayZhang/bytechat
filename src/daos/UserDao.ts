import { BaseDao } from './BaseDao';
import { User } from '@/models/User';
import { Result } from '@/helpers/Result';

export class UserDao extends BaseDao<User> {
  constructor() {
    super(User);
  }

  async createUser(user: User, existUser?: User) {
    try {
      let response;
      if (!existUser) {
        response = await User.create(user);
      } else {
        response = existUser;
      }
      return Result.ok(response.dataValues);
    } catch (ex: any) {
      return Result.fail(ex.message);
    }
  }

  async findUser({ account, password, mobile, nickname }: User) {
    try {
      const userOpt = {};
      account && Object.assign(userOpt, { account });
      password && Object.assign(userOpt, { password });
      nickname && Object.assign(userOpt, { nickname });
      mobile && Object.assign(userOpt, { mobile });

      const user = await User.findOne({ where: { ...userOpt } });

      if (!user) {
        return Result.fail('User not found');
      }
      return Result.ok(user.toJSON());
    } catch (ex: any) {
      return Result.fail(ex?.message);
    }
  }
}
