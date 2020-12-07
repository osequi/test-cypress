import { Machine } from "xstate";
import { createModel } from "@xstate/test";
import { menuStateTransitions } from "./Menu";

function addTests(state, tests) {
  return {
    ...state,
    states: Object.entries(state.states).reduce((s, [stateKey, stateValue]) => {
      return {
        ...s,
        [stateKey]: {
          ...stateValue,
          meta: {
            ...stateValue.meta,
            test: tests[stateKey],
          },
        },
      };
    }, {}),
  };
}

describe("Menu", () => {
  const menuMachine = Machine(
    addTests(menuStateTransitions, {
      hidden: () => {
        cy.get(".Menu").should("not.exist");
      },
      displayed: () => {
        cy.get(".Menu").should("exist");
      },
      default: () => {
        cy.get(".Menudefault").should("exist");
      },
      titleWithIcon: () => {
        cy.get(".MenutitleWithIcon").should("exist");
      },
    })
  );

  const testModel = createModel(menuMachine).withEvents({
    HOMEPAGE: () => {
      cy.visit("/");
    },
    NONHOMEPAGE: () => {
      cy.visit("/features");
    },
    PORTRAIT: () => {
      //cy.visit("/");
    },
    LANDSCAPE: () => {
      //cy.visit("/");
    },
  });

  const testPlans = testModel.getSimplePathPlans();

  testPlans.forEach((plan, i) => {
    describe(plan.description, () => {
      plan.paths.forEach((path, i) => {
        it(path.description, () => {
          return cy.visit("/").then(() => {
            return path.test(cy);
          });
        });
      });
    });
  });

  describe("coverage", () => {
    it("should pass", () => {
      testModel.testCoverage();
    });
  });
});
