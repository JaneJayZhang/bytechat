import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from './User';

// 好友分组表
@Table({ tableName: 'sys_friend_group' })
export class FriendGroup extends Model<FriendGroup> {
  @ForeignKey(() => User)
  @Column({ comment: '用户id' })
  userId: number;

  @Column({ type: DataType.STRING, comment: '分组名称', allowNull: false })
  name: string;
}
