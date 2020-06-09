import { ApolloServer } from 'apollo-server';
import { makeExecutableSchema } from 'graphql-tools';
import { merge } from 'lodash';
import mongoose from 'mongoose';

import rootTypeDefs from './root';
import { contentTypeDefs, contentResolvers } from './schemas/content.schema';
import { commentTypeDefs, commentResolvers } from './schemas/comment.schema';
import { bookTypeDefs, bookResolvers } from './schemas/book.schema';

import config from './config';

mongoose.connect(config.mongodb.uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const schema = makeExecutableSchema({
  typeDefs: [rootTypeDefs, contentTypeDefs, commentTypeDefs, bookTypeDefs],
  resolvers: merge(contentResolvers, commentResolvers, bookResolvers),
});

const server = new ApolloServer({ schema });

export { mongoose, ApolloServer, makeExecutableSchema, merge };

server.listen().then(({ url }) => {
  console.log(`Listening on port : ${url}`);
});

