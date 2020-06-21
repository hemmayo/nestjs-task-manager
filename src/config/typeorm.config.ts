import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'ruby.db.elephantsql.com',
  port: 5432,
  username: 'zqbzdgmb',
  password: 'sswHJudNqrvFM1b8gDwdGWcAgdnpBWE4',
  database: 'zqbzdgmb',
  entities: [__dirname + '/../**/*.entity.ts'],
  synchronize: true,
};
