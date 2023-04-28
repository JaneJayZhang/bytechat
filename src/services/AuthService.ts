import { UserDao } from '@/daos/UserDao';
import { Result } from '@/helpers/Result';
import { comparePasswords } from '@/helpers/constants';
import { generateToken } from '@/helpers/jwtHelper';
import { User } from '@/models/User';

export class AuthService {
  private userDao: UserDao;

  constructor() {
    this.userDao = new UserDao();
  }

  public async loginUser(requestUser: User) {
    const response = await this.userDao.findUser(requestUser);
    if (!response.success) {
      return Result.fail('Login error');
    }
    let user = response.getValue();
    const isMatch = comparePasswords(user.password, requestUser.password);
    if (isMatch) {
      const token = generateToken(user);
      return Result.ok(token);
    } else {
      return Result.fail('Invalid credential Details');
    }
  }
}
