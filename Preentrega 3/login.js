const form = document.querySelector('form');
let usuarios = [];
const ingresoFallido =document.getElementById("ingreso-fallido")


fetch('usuarios.json')
  .then(response => response.json())
  .then(data => {
    usuarios = data.usuarios;
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  });

form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const inputUsername = form.username.value;
  const inputPassword = form.password.value;
  const usersRegistrados = JSON.parse(localStorage.getItem('usuarios'));

  
  const coincidenciaUsers = usersRegistrados.find(user => user.username === inputUsername && user.password === inputPassword);


  if (coincidenciaUsers) {
    
    localStorage.setItem('usuarioActual', JSON.stringify(coincidenciaUsers));
    
    window.location.href = 'bienvenida.html';
  } else {
    ingresoFallido.innerText = "Nombre de usuario o contraseña incorrectos"
  }
});



