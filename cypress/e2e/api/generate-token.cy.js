describe("API - Generate Token", () => {
  it("should generate a token for valid user", () => {
    cy.request({
      method: "POST",
      url: "https://demoqa.com/Account/v1/GenerateToken",
      body: {
        userName: "testuser",
        password: "Test@1234",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.token).to.exist;
      expect(response.body.status).to.eq("Success");
    });
  });
});
