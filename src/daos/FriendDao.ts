import { Friend } from '@/models/Friend';
import { BaseDao } from './BaseDao';
import { Result } from '@/helpers/Result';

export class FriendDao extends BaseDao<Friend> {
  constructor() {
    super(Friend);
  }

  async createFriend(friend: Friend, existFriend?: Friend) {
    try {
      let response;
      if (!existFriend) {
        response = await Friend.create(friend);
      } else {
        response = existFriend;
      }
      return Result.ok(response.dataValues);
    } catch (ex: any) {
      return Result.fail(ex.message);
    }
  }

  async deleteFriend(userId: number, friendId: number) {
    try {
      const response = await Friend.destroy({ where: { userId, friendId } });
      return Result.ok(response);
    } catch (ex: any) {
      return Result.fail(ex.message);
    }
  }
}
