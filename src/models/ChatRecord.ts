import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from './User';

// 聊天记录表
@Table({ tableName: 'sys_chat_record' })
export class ChatRecord extends Model<ChatRecord> {
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, comment: '发送者id' })
  senderId: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, comment: '接收者id' })
  receiverId: number;

  @Column({ type: DataType.ENUM('0', '1', '2'), comment: '消息类型 0 文字 1 图片 2 文件' })
  msgType: string;

  @Column({ type: DataType.TEXT, comment: '消息内容' })
  msgContent: string;

  @Column({ type: DataType.TIME, comment: '消息发送时间' })
  sendTime: Date;
}
