import request from "supertest";
import app from "../../src/app";

describe("POST /auth/login", () => {
  it("should return a token for valid credentials", async () => {
    const response = await request(app)
      .post("/auth/login")
      .send({ email: "user1@example.com", password: "password1" });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("token");
  });

  it("should return 401 for invalid credentials", async () => {
    const response = await request(app)
      .post("/auth/login")
      .send({ email: "user@example.com", password: "wrongpassword" });
    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty("message", "Invalid credentials");
  });
});
