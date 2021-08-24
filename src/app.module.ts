// 在同目录下创建 database.ts 文件，并加入以下内容
// module.exports = {
//   dialect: 'mysql',
//   host: 'localhost',
//   port: 3306,
//   username: '', // 用户名
//   password: '', // 密码
//   database: '', // 数据库名称
//   autoLoadModels: true,
//   synchronize: true,
// }
var database = require('./database');

import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    SequelizeModule.forRoot(database),
    UsersModule,
  ],
})
export class AppModule {}
