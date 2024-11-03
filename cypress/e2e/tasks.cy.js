describe("task management", () => {
  it("should open and close the new task modal", () => {
    cy.visit("http://localhost:5173");
    cy.contains("Add Task").should("have.length", 1).click();
    cy.get(".backdrop").should("have.length", 1).click({ force: true }); // improve this by removing the force;
    cy.get(".backdrop").should("not.exist");
    cy.get(".modal").should("not.exist");
    cy.contains("Add Task").should("have.length", 1).click();
    cy.contains("Cancel").should("have.length", 1).click();
    cy.get(".backdrop").should("not.exist");
    cy.get(".modal").should("not.exist");
  });
  it("should add a new task", () => {
    const TAST_TITLE = "New Task";
    const TAST_SUMMARY = "New Task Summary";
    cy.visit("http://localhost:5173");
    cy.contains("Add Task").should("have.length", 1).click();
    cy.get("#title").type(TAST_TITLE);
    cy.get("#summary").type(TAST_SUMMARY);
    cy.get(".modal").contains("Add Task").should("have.length", 1).click();
    cy.get(".task-list .task").should("have.length", 1).contains(TAST_TITLE);
    cy.get(".task p").should("have.length", 1).contains(TAST_SUMMARY);
    cy.get(".backdrop").should("not.exist");
    cy.get(".modal").should("not.exist");
  });
});
