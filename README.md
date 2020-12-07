# test-cypress

## XState

- It's very very complicated.
- To model these transitions:

```js
isHomePage
  ? setMenuState("HOMEPAGE")
  : isPortrait
  ? setMenuState("PORTRAIT")
  : setMenuState("LANDSCAPE");
```

...We need [transient states](https://xstate.js.org/docs/guides/statenodes.html#transient-state-nodes) and [guards](https://xstate.js.org/docs/guides/guards.html#guards-condition-functions)

And what if these guards depend on external factors like route, device rotation? How to put them into an `useEffect`? If put in `useEffect` they must be included in the main function. This implies also the state machine code is needed to be put there? That would make the entire codebase very long and ugly. XState code is usually very long.

## Cypress

- easy
- https://docs.cypress.io/guides/getting-started/installing-cypress.html
- In `config.json` add `script`: `"c": "cypress run"`.
- Create the first test:

```js
// src/App.spec.ts
describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("/");
    cy.get(".app").should("contain", "App");
  });
});
```

```js
// src/App.tsx
import React from "react";
const App = () => <div className="app">App</div>;
export default App;
```

- Create `cypress.json`. See https://docs.cypress.io/guides/getting-started/testing-your-app.html#Step-3-Configure-Cypress

```json
{
  "baseUrl": "http://localhost:3000",
  "integrationFolder": "./src",
  "testFiles": "**/*.spec.ts",
  "video": false
}
```

- Run test: `y c` or `yarn cypress run`
- All should be fine for now.

### XState

- The tests were running all fine.
- The coverage report was signalling errors.
- We knew the state machine is not working.

## React testing library with Cypress

- https://testing-library.com/docs/cypress-testing-library/intro
- `cypress/support/commands.js` has to be added manually.
- ~~Don't know what to do with this.~~ It seems extends Cypress with queries coming from React Testing Library.

## CRA with TS

- easy
- https://create-react-app.dev/docs/adding-typescript
