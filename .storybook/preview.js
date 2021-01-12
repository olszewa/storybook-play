
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: [
        'Tutorials',
        ['Markdown', 'Components'],
      ],
    },
  },
}

export const globalTypes = {
  theme: {
    name: 'Something',
    description: 'Some Options',
    defaultValue: 'light',
    toolbar: {
      icon: 'question',
      items: ['Option 1', 'Option 2'],
    },
  },
};
