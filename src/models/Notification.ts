import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from './User';

// 消息通知表
@Table({ tableName: 'sys_notification' })
export class Notification extends Model<Notification> {
  @ForeignKey(() => User)
  @Column({ comment: '发送者id' })
  senderId: number;

  @ForeignKey(() => User)
  @Column({ comment: '接收者id' })
  receiverId: number;

  @Column({ type: DataType.ENUM('0', '1'), comment: '通知类型 0 好友请求 1 系统通知' })
  notificationType: string;

  @Column({ type: DataType.TEXT, comment: '通知内容' })
  notificationContent: string;

  @Column({ type: DataType.TIME, comment: '发送时间' })
  sendTime: Date;

  @Column({ type: DataType.ENUM('0', '1'), comment: '通知状态 0 未读 1 已读' })
  status: number;
}
