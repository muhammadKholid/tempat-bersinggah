import { createTestClient } from 'apollo-server-testing';
import {
  mongoose,
  ApolloServer,
  merge,
  makeExecutableSchema,
} from '../src/index';

import rootTypeDefs from '../src/root';
import {
  contentTypeDefs,
  contentResolvers,
} from '../src/schemas/content.schema';
import {
  commentTypeDefs,
  commentResolvers,
} from '../src/schemas/comment.schema';
import { bookTypeDefs, bookResolvers } from '../src/schemas/book.schema';

const connectToDb = async () => {
  await mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((error) => console.error(error));
};

const dropTestDb = async () => {
  if (process.env.NODE_ENV === 'test') {
    await mongoose.connection.db
      .dropDatabase()
      .catch((error) => console.error(error));
  }
};

const closeDbConnection = async () => {
  await mongoose.connection.close().catch((error) => console.error(error));
};

const schema = makeExecutableSchema({
  typeDefs: [rootTypeDefs, contentTypeDefs, commentTypeDefs, bookTypeDefs],
  resolvers: merge(contentResolvers, commentResolvers, bookResolvers),
});

const server = new ApolloServer({ schema });

export default {
  testClient: createTestClient(server),
  connectToDb,
  closeDbConnection,
  dropTestDb,
};
