function validarsenha() {
  debugger;
  var senha = "senha1234";
  var login = "ketlyn@gmail.com";
  var loginDigitado = document.querySelector("#iemail");
  var senhaDigitado = document.querySelector("#ipassword");
  if (senha == senhaDigitado.value && login == loginDigitado.value) {
    window.location.href = "pagina2.html";
  } else {
    alert("email ou senha incorretos");
  }
}

if (typeof module !== "undefined") {
  module.exports = { validarCredenciais };
}
