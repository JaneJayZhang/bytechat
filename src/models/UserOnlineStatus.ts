import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from './User';

// 用户在线状态表
@Table({ tableName: 'sys_user_online_status' })
export class UserOnlineStatus extends Model<UserOnlineStatus> {
  @ForeignKey(() => User)
  @Column({ comment: '用户id' })
  userId: number;

  @Column({ type: DataType.ENUM('0', '1'), comment: '在线状态 0 离线 1 在线' })
  status: string;

  @Column({ type: DataType.DATE, comment: '最后在线时间' })
  lastOnlineTime: Date;
}
