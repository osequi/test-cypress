describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("/");
    cy.get(".app").should("contain", "App");
  });
});
