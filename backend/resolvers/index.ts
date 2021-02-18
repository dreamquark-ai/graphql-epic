import { graphQLSchemaExtension } from '@keystone-next/keystone/schema';
import createDataset from './mutations/createDataset';

const graphql = String.raw;

export const extendGraphqlSchema = graphQLSchemaExtension({
  typeDefs: graphql`
    extend type Mutation {
      createDataset(data: DatasetCreateInput): Dataset
    }
    # extend type Query {
    #   allDatasets: [Dataset]!
    # }
  `,
  resolvers: {
    Mutation: {
      createDataset,
    },
    // Query: {
    //   allDatasets(root: any, { data }: { data: unknown }, ctx) {
    //     return [];
    //   },
    // },
  },
});
