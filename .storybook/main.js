module.exports = {
  stories: ['../src/*.stories.tsx'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions/register',
    '@storybook/addon-links/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-viewport/register',
    '@storybook/addon-storysource/register',
  ],
  webpackFinal(config) {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve("react-docgen-typescript-loader")
          },
          {
            loader: require.resolve('@storybook/source-loader'),
            options: { parser: 'typescript' }
          }
        ]

      });
      config.resolve.extensions.push(".ts", "tsx");
      return config;
  }
};
