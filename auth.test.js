const { validarCredenciais } = require("./auth");

describe("Suíte de Testes: Validação de Login", () => {
  test("1. Credenciais corretas -> deve retornar true", () => {
    expect(validarCredenciais("ketlyn@gmail.com", "senha1234")).toBe(true);
  });

  test("2. Senha errada -> deve retornar false", () => {
    expect(validarCredenciais("ketlyn@gmail.com", "errado")).toBe(false);
  });

  test("3. Email errado -> deve retornar false", () => {
    expect(validarCredenciais("outro@email.com", "senha1234")).toBe(false);
  });

  test("4. Campos vazios -> deve retornar false", () => {
    expect(validarCredenciais("", "")).toBe(false);
  });

  test("5. Case sensitive no email -> deve retornar false", () => {
    expect(validarCredenciais("KETLYN@gmail.com", "senha1234")).toBe(false);
  });
});
