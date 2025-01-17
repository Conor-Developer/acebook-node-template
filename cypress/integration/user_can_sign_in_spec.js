describe("Authentication", () => {
  it("A user signs in and is redirected to /posts", () => {
    // sign up
    cy.visit("/");
    cy.get("#Signup").click();
    cy.url().should("include", "/users/new");
    cy.get("#username").type("someone");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    // sign in
    cy.visit("/sessions/new");

    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();
    cy.url().should("include", "/posts");
  });


  it('user sign in from home page', () => {
    // sign in

    cy.visit("/");
    cy.get("#Login").click();
    cy.url().should("include", "/sessions/new");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();
    cy.url().should("include", "/posts");
    cy.contains("Welcome");


  }); 
  it("A user cannot sign up with duplicate email", () => {
   // sign up
   cy.visit("/");
   cy.get("#Signup").click();
   cy.url().should("include", "/users/new");
   cy.get("#username").type("someone345");
   cy.get("#email").type("someone345@example.com");
   cy.get("#password").type("password");
   cy.get("#submit").click();

   cy.visit("/");
   cy.get("#Signup").click();
   cy.url().should("include", "/users/new");
   cy.get("#username").type("someone345");
   cy.get("#email").type("someone345@example.com");
   cy.get("#password").type("password");
   cy.get("#submit").click();
   cy.contains("Email/Username in use")
})
});
