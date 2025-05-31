const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    async setupNodeEvents(on, config) {
      // Cucumber preprocessor setup
      await addCucumberPreprocessorPlugin(on, config);
      
      // ESBuild bundler setup
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin.default(config)],
        })
      );
      
      // Allure reporter setup
      allureWriter(on, config);
      
      return config;
    },
    env: {
      allure: true,
      allureAttachCommands: true,
      allureReuseAfterSpec: true,
      // Add any other environment variables here
    }
  },
});


