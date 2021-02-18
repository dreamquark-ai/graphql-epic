/* eslint-disable @typescript-eslint/no-unsafe-return */
import { KeystoneContext } from '@keystone-next/types';
import { User } from '../../schemas/User';

export default async function createDataset(
  root: any,
  { data }: unknown,
  context: KeystoneContext
) {
  const auth = await User(context.user)

  const dataset = await context.lists.Dataset.createOne({
    data,
  });
  const datasetEngine = await engine(someParams, anotherParams);

  // obfuscator => save BDD
  return {
    ...dataset,
    ...datasetEngine,
  };
}
