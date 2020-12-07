# test-cypress

## Cypress

- https://docs.cypress.io/guides/getting-started/installing-cypress.html
- In `config.json` add `script`: `"c": "cypress run"`.
- Create the first test:

```js
// src/App.spec.js
describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("/");
  });
});
```

- Create `cypress.json`. See https://docs.cypress.io/guides/getting-started/testing-your-app.html#Step-3-Configure-Cypress

```json
{
  "baseUrl": "http://localhost:3000",
  "integrationFolder": "./src",
  "testFiles": "**/*.spec.js",
  "video": false
}
```

- run test: `y c` or `yarn cypress run`
- all should be fine for now.

## React testing library wuth Cypress

- https://testing-library.com/docs/cypress-testing-library/intro
- `cypress/support/commands.js` has to be added manually.
- Don't know what to do with this.

## CRA with TS

- easy
- https://create-react-app.dev/docs/adding-typescript
