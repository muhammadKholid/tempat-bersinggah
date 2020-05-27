import { gql } from 'apollo-server';

import Comment from '../models/comment.model';
import Content from '../models/content.model';

export const commentTypeDefs = gql`
  ########## Comment schema
  type Comment {
    id: ID!
    contentId: String!
    stranger: String!
    opinion: String!
    createdAt: String!
  }

  input CommentInput {
    contentId: String!
    stranger: String!
    opinion: String!
  }

  ########## Queries

  extend type Query {
    ## Comment
    getComments: [Comment]!
  }

  ########## Mutations
  extend type Mutation {
    ## Comment
    createComment(input: CommentInput!): Comment!
    deleteComment(id: ID!): Output!
  }
`;

export const commentResolvers = {
  Query: {
    getComments: async (_) => {
      const allDatas = await Comment.find();

      return allDatas;
    },
  },
  Mutation: {
    createComment: async (_, { id, input }) => {
      const { contentId, stranger, opinion } = input;
      const newData = {
        contentId,
        stranger,
        opinion,
      };
      const newComment = new Comment(newData);
      await newComment.save();

      return newComment;
    },
    deleteComment: async (_, { id }) => {
      await Comment.deleteOne({ _id: id });
      return {
        result: 'Succesfully deleted comment!',
      };
    },
  },
};
