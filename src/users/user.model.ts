import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  signature: string;

  @Column('long')
  userProfile: string;

  @Column('text')
  accountInfo: string;

  @Column('text')
  systemInfo: string;

  @Column
  name: string;

  @Column
  avatar: string;

  @Column
  content: string;

  @Column({ defaultValue: true })
  isActive: boolean;
}
