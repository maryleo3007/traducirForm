var sign = document.getElementById('form-signin-heading');
var inputEmail = document.getElementById('inputEmail');
var inputPass = document.getElementById('inputPassword');
var checkbox = document.getElementsByTagName('span')[0];
var boton = document.getElementsByClassName('btn btn-lg btn-primary btn-block submit-btn')[0];
var resultado = document.getElementById('resultado');
var enlaces = document.getElementsByTagName('a');
function traducir() {
  sign.innerHTML = "Por favor Inicia Sesion";
  inputEmail.placeholder = "Ingresa tu email";
  inputPass.placeholder= "contrasenia";
  checkbox.innerHTML = "Recordarme"
  boton.innerHTML = "Iniciar sesion";
}
traducir();
function mostrar_resultado(event){
  event.preventDefault();
  resultado.innerHTML = "<h3>Datos del formulario</h3>"
                        +"El correo ingresado es <br>"+
                        inputEmail.value+"<br> La clave ingresada es: <br>"+
                        inputPass.value+
                        "numero de enlaces : "+enlaces.length  ;
}
