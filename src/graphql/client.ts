import { GraphQLClient } from "graphql-request";
export const graphqlClient = new GraphQLClient(process.env.HYGRAPH_API_URL);
