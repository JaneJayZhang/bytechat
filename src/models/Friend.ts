import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from './User';
import { Group } from './Group';

// 好友表
@Table({ tableName: 'sys_friend' })
export class Friend extends Model<Friend> {
  @ForeignKey(() => User)
  @Column({ comment: '用户id' })
  userId: number;

  @ForeignKey(() => User)
  @Column({ comment: '好友id' })
  friendId: number;

  @ForeignKey(() => Group)
  @Column({ comment: '好友分组id' })
  groupId: number;
}
