const { validarCredenciais } = require("./auth");

describe("Validação de Login", () => {
  test("1. Deve aceitar credenciais corretas", () => {
    expect(validarCredenciais("ketlyn@gmail.com", "senha1234")).toBe(true);
  });

  test("2. Deve rejeitar senha errada", () => {
    expect(validarCredenciais("ketlyn@gmail.com", "123")).toBe(false);
  });

  test("3. Deve rejeitar email errado", () => {
    expect(validarCredenciais("errado@gmail.com", "senha1234")).toBe(false);
  });

  test("4. Deve rejeitar campos vazios", () => {
    expect(validarCredenciais("", "")).toBe(false);
  });

  test("5. Deve ser case-sensitive para o email", () => {
    expect(validarCredenciais("KETLYN@gmail.com", "senha1234")).toBe(false);
  });
});
