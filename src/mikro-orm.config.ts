import { __prod__ } from "./contants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from 'path';

require('dotenv').config()

export default {
  migrations: {
    path: path.join(__dirname,'./migrations'),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post],
  dbName: process.env.DB_NAME,
  clientUrl: process.env.DB_HOST,
  type: process.env.DB_DRIVER,
  debug: !__prod__,
  password: process.env.DB_PASSWORD
} as Parameters<typeof MikroORM.init>[0];