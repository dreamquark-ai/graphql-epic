import { createAuth } from '@keystone-next/auth';
import { config, createSchema } from '@keystone-next/keystone/schema';
import {
  withItemData,
  statelessSessions,
} from '@keystone-next/keystone/session';
import { User } from './schemas/User';
import { Dataset } from './schemas/Dataset';
import { Project } from './schemas/Project';
import { Experiment } from './schemas/Experiment';
import { extendGraphqlSchema } from './resolvers/index';
import 'dotenv/config';

const databaseURL = process.env.DATABASE_URL || 'mongodb://localhost/keystone';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // how long stay signed
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
    // TODO: add roles
  },
});

export default withAuth(
  config({
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
    },
    db: {
      adapter: 'mongoose',
      url: databaseURL,
      // async onConnect(keystone) {
      //   if (process.argv.includes('--seed-data')) {
      //     await insertSeedData(keystone);
      //   }
      // },
    },
    lists: createSchema({
      User,
      Dataset,
      Project,
      Experiment,
    }),
    extendGraphqlSchema,
    ui: {
      // Show the UI only for people who pass this test
      isAccessAllowed: ({ session }) => !!session?.data,
    },
    session: withItemData(statelessSessions(sessionConfig), {
      User: 'id name email',
    }),
  })
);
