import 'dotenv/config';
import { relationship, select, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Experiment = list({
  fields: {
    name: text(),
    description: text(),
    project: relationship({ ref: 'Project.experiments' }),
    status: select({
      options: [
        { label: 'In Progress', value: 'IN PROGRESS' },
        { label: 'Done', value: 'DONE' },
      ],
      defaultValue: 'DRAFT',
      ui: {
        displayMode: 'segmented-control',
        createView: { fieldMode: 'hidden' },
      },
    }),
  },
  ui: {
    listView: {
      initialColumns: ['name', 'description'],
    },
  },
});
