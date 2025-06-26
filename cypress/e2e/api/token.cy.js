describe("API Token Test", () => {
  it("should return a token for valid user", () => {
    cy.getTokenAPI("testuser", "Test@1234").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.token).to.not.be.null;
    });
  });
});
