import { UserDao } from '@/daos/UserDao';
import { Result } from '@/helpers/Result';
import { cryptPassword } from '@/helpers/constants';
import { User } from '@/models/User';

export class UserService {
  private userDao: UserDao;

  constructor() {
    this.userDao = new UserDao();
  }

  public async createUser(user: User) {
    user.password = cryptPassword(user.password);
    const existUser = await this.userDao.findUser(user);

    let newUser: Result;
    if (existUser.success) {
      newUser = await this.userDao.createUser(user, existUser.getValue());
    } else {
      newUser = await this.userDao.createUser(user);
    }

    return newUser;
  }

  getUserById = async (id: number | string) => {
    const response = await this.userDao.findOne(id);
    return response;
  };

  updateUser = async (id: number, newUser: User) => {
    const user = await this.userDao.update(id, newUser);
    return user;
  };

  deleteUser = async (id: number) => {
    const response = await this.userDao.delete(id);
    return response;
  };
}
