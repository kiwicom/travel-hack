import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} from "graphql";

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQuery",
    fields: {
      id: {
        type: GraphQLID,
      },

      hello: {
        type: GraphQLString,
        resolve() {
          return "Welcome to Tequila travel hackathon!";
        },
      },
    },
  }),
});

const inMemoryFetcher = (source, variableValues) => {
  return graphql(schema, source, undefined, undefined, variableValues);
};

export { schema, inMemoryFetcher };
