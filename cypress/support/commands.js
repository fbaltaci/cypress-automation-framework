Cypress.Commands.add("loginUI", (username, password) => {
  cy.get("#userName").type(username);
  cy.get("#password").type(password);
  cy.get("#login").click();
});

Cypress.Commands.add("getTokenAPI", (username, password) => {
  return cy.request({
    method: "POST",
    url: "/Account/v1/GenerateToken",
    body: {
      userName: username,
      password: password,
    },
  });
});
