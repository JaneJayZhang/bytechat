import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from './User';

// 设备信息表
@Table({ tableName: 'sys_device' })
export class Device extends Model<Device> {
  @ForeignKey(() => User)
  @Column({ comment: '用户id' })
  userId: number;

  @Column({ type: DataType.ENUM('0', '1'), comment: '设备类型 0 Android 1 iOS' })
  deviceType: string;

  @Column({ type: DataType.STRING(50), comment: '设备系统版本' })
  deviceSysVersion: string;

  @Column({ type: DataType.ENUM('0', '1'), comment: '设备状态 0 正常 1 禁用' })
  status: string;
}
