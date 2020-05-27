import { gql } from 'apollo-server';

import Content from '../models/content.model';

export const contentTypeDefs = gql`
  ########## Content schema

  type Content {
    id: ID!
    image: String!
    book: String!
    author: String!
    thickness: String!
    language: String!
    format: String!
    title: String!
    headline: String!
    createdAt: String!
    review: String!
    rate: String!
    like: String!
  }

  input ContentInput {
    image: String!
    book: String!
    author: String!
    thickness: String!
    language: String!
    format: String!
    title: String!
    headline: String!
    review: String!
    rate: String!
    like: String!
  }

  ########## Queries

  type Output {
    result: String!
  }

  extend type Query {
    ## Content
    getContents: [Content]!
    getContent(id: ID!): Content!
  }

  ########## Mutations
  extend type Mutation {
    ## Content
    createContent(input: ContentInput!): Content!
    updateContent(id: ID!, input: ContentInput!): Output!
    deleteContent(id: ID!): Output!
  }
`;

export const contentResolvers = {
  Query: {
    getContents: async (_) => {
      const allDatas = await Content.find();

      return allDatas;
    },
    getContent: async (_, { id }) => {
      const data = await Content.findOne({ _id: id });
      return data;
    },
  },
  Mutation: {
    createContent: async (_, { input }) => {
      const {
        image,
        book,
        author,
        thickness,
        language,
        format,
        title,
        headline,
        review,
        rate,
        like,
      } = input;
      const newData = new Content({
        image,
        book,
        author,
        thickness,
        language,
        format,
        title,
        headline,
        review,
        rate,
        like,
      });
      await newData.save();

      return newData;
    },
    updateContent: async (_, { id, input }) => {
      const {
        image,
        book,
        author,
        thickness,
        language,
        format,
        title,
        headline,
        createdAt,
        review,
        rate,
        like,
      } = input;
      let result = '';
      const theData = await Content.findOne({ _id: id });

      theData.image = image;
      theData.book = book;
      theData.author = author;
      theData.thickness = thickness;
      theData.language = language;
      theData.format = format;
      theData.title = title;
      theData.headline = headline;
      theData.createdAt = createdAt;
      theData.review = review;
      theData.review = review;
      theData.rate = rate;
      theData.like = like;

      await theData.save();
      result = 'Succesfully updated Content!';
      return {
        result,
      };
    },
    deleteContent: async (_, { id }) => {
      const deleted = await Content.deleteOne({ _id: id });
      deleted.result = 'Sucessfuly delete Content!';
      return deleted;
    },
  },
};
