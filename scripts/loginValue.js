document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("login-form");
  const passwordInput = document.getElementById("password");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    validateForm();
  });

  passwordInput.addEventListener("input", function () {
    checkPasswordRange(passwordInput.value);
  });

  //funcion para validar datos del login
  function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // validar que los campos no esten vacios 
    if (username.trim() === "" || password.trim() === "") {
      alert("Por favor complete los campos.");
      return;
    }
    // validar que el usuario no tengan ningun caracater epecial
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    if (!usernameRegex.test(username)) {
      alert("El usuario no debe tener caracteres especiales. ");
      return;
    }
    // validar que la contraseña tenga al menos 6 caracteres 
    if (password.length < 6) {
      alert("la contraseña debe tener almenos 6 caracteres.");
      return;
    }
    // validacion de contraseña una MYS , un Nro , un Caracter especial 
    const passwordRagex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRagex.test(password)) {
      alert(
        "la contraseña debe tener almemos una letra mayuscula, un numero y un caracter especial"
      );
    }
    form.submit();
  }
});
