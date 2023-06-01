import { resolvers } from "../../graphql/resolvers";
import { typeDefs } from "../../graphql/schema";
import { createSchema, createYoga } from "graphql-yoga";
import type { NextApiRequest, NextApiResponse } from "next";

export default createYoga<{ req: NextApiRequest; res: NextApiResponse }>({
  schema: createSchema({
    typeDefs,
    resolvers,
  }),
  graphqlEndpoint: "/api/graphql",
});

export const config = {
  api: {
    bodyParser: false,
  },
};
