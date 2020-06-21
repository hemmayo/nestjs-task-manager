import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const config = {
  production: {
    host: 'ruby.db.elephantsql.com',
    username: 'zqbzdgmb',
    password: 'sswHJudNqrvFM1b8gDwdGWcAgdnpBWE4',
    database: 'zqbzdgmb',
  },
  development: {
    host: 'localhost',
    username: 'postgres',
    password: 'postgres',
    database: 'task-manager',
  },
}['development'];

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  port: 5432,
  entities: [__dirname + '/../**/*.entity.js'],
  synchronize: true,
  ...config,
};
