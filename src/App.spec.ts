describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("/");
    cy.get(".Menu").should("contain", "Menu");
  });
});

export {};
