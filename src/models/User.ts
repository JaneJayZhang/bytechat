import { Column, DataType, Table, Model } from 'sequelize-typescript';

// 用户表
@Table({ tableName: 'sys_user' })
export class User extends Model<User> {
  @Column({ type: DataType.STRING, allowNull: false, comment: '账号', unique: true })
  account: string;

  @Column({ type: DataType.CHAR(100), allowNull: false, comment: '密码' })
  password: string;

  @Column({ type: DataType.STRING(50), comment: '昵称' })
  nickname: string;

  @Column({ type: DataType.STRING, defaultValue: '', comment: '用户头像' })
  avatar: string;

  @Column({ type: DataType.STRING(32), comment: '手机号' })
  mobile: string;

  @Column({ type: DataType.ENUM('0', '1'), comment: '性别, 0 女 1 男' })
  gender: string;

  @Column({ type: DataType.SMALLINT, comment: '年龄' })
  age: number;

  @Column({ type: DataType.ENUM('0', '1'), comment: '用户状态 0 正常 1 禁用', defaultValue: '0' })
  status: string;
}
