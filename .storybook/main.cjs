const path = require("path")
module.exports = {
  // NOTE! added support for Vite builder
  core: {
    builder: "storybook-builder-vite"
  },
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"
  ],
  addons: [
    //"storybook-tailwind-dark-mode",
    "storybook-addon-outline",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-svelte-csf",
    {
      name: '@storybook/addon-postcss',
      options: {
        cssLoaderOptions: {
          // When you have splitted your css over multiple files
          // and use @import('./other-styles.css')
          importLoaders: 1,
        },
        postcssLoaderOptions: {
          // When using postCSS 8
          implementation: require('postcss'),
        },
      },
    },
    {
      name: "@storybook/addon-storysource",
      options: {
        rule: {
          include: [path.resolve(__dirname, '../src')],
        },
        loaderOptions: {
          prettierConfig: {printWidth: 80, singleQuote: false}
        }
      }
    }
  ],
  svelteOptions: {
    preprocess: require("../svelte.config.cjs").preprocess
  },
   async viteFinal(config) {
    config.resolve.alias = {
      "$lib": path.resolve(__dirname, '../src/lib'),
      "$stores":path.resolve(__dirname, '../src/stores'),
      "$app": path.resolve('./.svelte-kit/dev/runtime/app'),
      //  "$app": path.resolve(__dirname), '../.svelte-kit/runtime/app'
    };

    return config;
  }
}
