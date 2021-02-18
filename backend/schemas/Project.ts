import 'dotenv/config';
import { relationship, select, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Project = list({
  fields: {
    name: text(),
    description: text(),
    dataset: relationship({ ref: 'Dataset.projects' }),
    experiments: relationship({
      ref: 'Experiment.project',
      many: true,
      ui: {
        createView: { fieldMode: 'edit' },
        itemView: { fieldMode: 'read' },
      },
    }),
    status: select({
      options: [
        { label: 'Draft', value: 'DRAFT' },
        { label: 'Available', value: 'AVAILABLE' },
        { label: 'Unvailable', value: 'UNAVAILABLE' },
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
