const rewardsSchema = () => [
  {
    name: 'points',
    label: 'Points',
    widget: 'number',
    valueType: 'int',
  },
  {
    name: 'title',
    label: 'Title',
    widget: 'string',
  },
  {
    name: 'description',
    label: 'Description',
    widget: 'markdown',
  },
  {
    name: 'dates',
    label: 'Dates',
    widget: 'list',
    hint: 'List of dates. Separated by commas. Format: YYYY-MM-DD',
  },
];

const rewards = () => ({
  name: 'rewards',
  identifier_field: 'id',
  label: 'Rewards',
  label_singular: 'Reward',
  folder: 'src/data/rewards/',
  extension: 'json',
  create: true,
  fields: [
    {
      name: 'type',
      label: 'Type',
      widget: 'hidden',
      default: 'rewards',
    },
    ...rewardsSchema(),
  ],
});

export default rewards;