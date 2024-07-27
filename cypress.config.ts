import { defineConfig } from 'cypress'

export default defineConfig({
  viewportWidth: 1440,
  viewportHeight: 1024,
  e2e: {
    baseUrl: 'https://localhost:3000',
    supportFile: false,
    specPattern: 'src/tests/e2e/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
})
