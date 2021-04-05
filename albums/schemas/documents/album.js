const album = {
  name: 'album',
  type: 'document',
  title: 'Album',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'artist',
      type: 'reference',
      to: { type: 'artist' },
    },
    {
      name: 'cover',
      type: 'image',
      title: 'Cover',
    },
    {
      name: 'year',
      type: 'string',
      title: 'Release Year',
    },
    {
      name: 'stars',
      type: 'number',
      title: 'Stars',
      valudation: (Rule) => Rule.required().min(1).max(10),
    },
  ],
  preview: {
    select: {
      album: 'title',
      rating: 'stars',
      year: 'year'
    },
    prepare(selection) {
      const { album, rating, year } = selection;
      return {
        title: `${album} (${year})`,
        subtitle: `Rating: ${rating}/10`,
      };
    },
  },
};

export default album;
