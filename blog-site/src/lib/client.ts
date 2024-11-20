import { GraphQLClient } from "graphql-request";
const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ACCESS_ENDPOINT as string;

const clientHygraph = new GraphQLClient(graphqlAPI);
export default clientHygraph;
