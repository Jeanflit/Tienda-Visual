document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el envío del formulario

  // Obtén los valores del formulario
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  // Definir usuarios y contraseñas válidos
  const validUsername = 'usuario1';
  const validPassword = 'contraseña13';

  // Verificar credenciales
  if (username === validUsername && password === validPassword) {
    errorMessage.textContent = '';  // Borra el mensaje de error si las credenciales son correctas
    alert('¡Inicio de sesión correcto!');
    
    // Redirige a otra página o cambia el estado de la interfaz
    window.location.href = 'home.html'; // Suponiendo que haya una página de inicio
  } else {
    errorMessage.textContent = 'Usuario o contraseña incorrectos.';
  }
});

function logout() {
  localStorage.removeItem('loggedIn');
  mostrarFormularioLogin();
}

// Al cargar
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('loggedIn') === 'true') {
    mostrarPantallaPrincipal();
  } else {
    mostrarFormularioLogin();
  }
});