const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|mdx)",
    "../src/**/**/*.stories.@(js|jsx|mdx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  "webpackFinal": async (config) => {
    config.resolve.alias = {
      components: path.resolve(__dirname, '../src/components'),
      styles: path.resolve(__dirname, '../src/styles'),
      themes: path.resolve(__dirname, '../src/themes'),
    } ;

    return config;
  },
}
