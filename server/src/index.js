import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server';

import { typeDefs } from './schemas/index';
import { resolvers } from './resolvers/index';

const serverReady = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });

  await mongoose.connect('mongodb://localhost:27017/tempat-bersinggah', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  server.listen().then(({ url }) => {
    console.log('Listening on port :', url);
  });
};

serverReady();
