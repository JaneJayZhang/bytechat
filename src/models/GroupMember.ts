import { Model, Table, Column, ForeignKey, DataType } from 'sequelize-typescript';
import { Group } from './Group';
import { User } from './User';

// 群组成员表
@Table({ tableName: 'sys_group_member' })
export class GroupMember extends Model<GroupMember> {
  @ForeignKey(() => Group)
  @Column({ comment: '群组id' })
  groupId: number;

  @ForeignKey(() => User)
  @Column({ comment: '成员id' })
  userId: number;

  @Column({ type: DataType.STRING(50), comment: '成员昵称' })
  nickname: string;

  @Column({ type: DataType.TIME, comment: '加入时间' })
  joinTime: Date;
}
