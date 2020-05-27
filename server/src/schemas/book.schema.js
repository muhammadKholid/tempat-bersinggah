import { gql } from 'apollo-server';

import Book from '../models/book.model';

export const bookTypeDefs = gql`
  ######### Book schema
  type Book {
    id: ID!
    image: String!
    title: String!
    author: String!
    thickness: String!
    language: String!
    format: String!
    synopsis: String!
  }

  input BookInput {
    image: String!
    title: String!
    author: String!
    thickness: String!
    language: String!
    format: String!
    synopsis: String!
  }

  ########## Queries

  extend type Query {
    ## Book
    getBooks: [Book]!
    getBook(id: ID!): Book!
  }

  ########## Mutations
  extend type Mutation {
    ## Book
    createBook(input: BookInput!): Book!
  }
`;

export const bookResolvers = {
  Query: {
    getBooks: async (_) => {
      const allDatas = await Book.find();

      return allDatas;
    },
    getBook: async (_, { id }) => {
      const oneData = await Book.findOne({ _id: id });

      return oneData;
    },
  },
  Mutation: {
    createBook: async (_, { id, input }) => {
      const {
        image,
        title,
        author,
        thickness,
        language,
        format,
        synopsis,
      } = input;
      const newData = {
        image,
        title,
        author,
        thickness,
        language,
        format,
        synopsis,
      };
      const newBook = new Book(newData);
      await newBook.save();

      return newBook;
    },
  },
};
