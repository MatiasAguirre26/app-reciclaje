document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    validateForm();
  });

  // funcion para validar datos del registro 
  function validateForm() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // valida que los campos no esten vacios
    if (
      username.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      alert("Por favor complete todos los campos.");
      return;
    }

    // valida que el nombre de usuario no tenga caracteres especiales 
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    if (!usernameRegex.test(username)) {
      alert("El nombre  de usuario no debe tener un caracter especial.");
      return;
    }
    // valida que la contraseña tenga mas de 6 caracteres 
    if (password.length < 6) {
      alert("la contraseña debe tener almenos 6 caracteres.");
      return;
    }
    // valida que la contraseña tenga al menos 1 letra MYS , un nro y un caracter epecial
    const passwordRagex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRagex.test(password)) {
      alert(
        "la contraseña debe tener almemos una letra mayuscula, un numero y un caracter especial."
      );
    }
    // valida que las contraseñas coincidian 
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    form.submit();
  }
});
