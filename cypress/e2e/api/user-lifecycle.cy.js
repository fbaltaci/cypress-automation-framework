const username = `testuser_${Date.now()}`;
const password = "Test@1234";

let userId;

describe("API - Create and Delete User", () => {
  it("creates a new user", () => {
    cy.request("POST", "https://demoqa.com/Account/v1/User", {
      userName: username,
      password: password,
    }).then((res) => {
      expect(res.status).to.eq(201);
      userId = res.body.userID;
    });
  });

  it("generates token for that user", () => {
    cy.request("POST", "https://demoqa.com/Account/v1/GenerateToken", {
      userName: username,
      password: password,
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.token).to.exist;
    });
  });

  it("deletes the user", () => {
    cy.request("POST", "https://demoqa.com/Account/v1/GenerateToken", {
      userName: username,
      password: password,
    }).then((loginRes) => {
      const token = loginRes.body.token;

      cy.request({
        method: "DELETE",
        url: `https://demoqa.com/Account/v1/User/${userId}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        expect(res.status).to.eq(204);
      });
    });
  });
});
