const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'm194n3',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
