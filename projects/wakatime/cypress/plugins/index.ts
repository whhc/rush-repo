/// <reference types="cypress" />
/**
 * @type {Cypress.PluginConfig}
 */
export default (_on: Cypress.PluginConfig, config: Cypress.PluginConfigOptions) => {
  return Object.assign({}, config, {
    fixturesFolder: 'cypress/fixtures',
    integrationFolder: 'cyress/integration',
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    supportFile: 'cypress/support/index.ts'
  });
};
