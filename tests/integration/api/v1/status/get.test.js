test("testa retorno 200 para GET /api/v1/status", async () => {
  const response = await fetch("http://127.0.0.1:3000/api/v1/status");
  expect(response.status).toBe(200);
});