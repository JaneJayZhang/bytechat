import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from './User';

// 群组表
@Table({ tableName: 'sys_group' })
export class Group extends Model<Group> {
  @Column({ type: DataType.STRING(50), comment: '群组名称', allowNull: false })
  name: string;

  @Column({ type: DataType.STRING(200), comment: '群组头像地址' })
  avatar: string;

  @ForeignKey(() => User)
  @Column({ comment: '群组创建者id' })
  ownerId: number;
}
