/// <reference types="cypress" />

describe("task page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });
  it("should render main image", () => {
    cy.get(".main-header img").should("have.length", 1);
  });
  it("should render main title", () => {
    cy.get("h1").should("have.length", 1).contains("React Tasks");
  });
});
