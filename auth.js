function validarCredenciais(email, senha) {
  const loginCorreto = "ketlyn@gmail.com";
  const senhaCorreta = "senha1234";

  // Retorna true se bater, false se não
  if (email === loginCorreto && senha === senhaCorreta) {
    return true;
  }
  return false;
}

// Compatibilidade: exporta para o Jest (Node) sem quebrar o Navegador
if (typeof module !== "undefined" && module.exports) {
  module.exports = { validarCredenciais };
}
