//Jairo Raul Urrego Saa / urregos.jairo@gmail.com / ONE-Grupo 3 / Challenge "Encriptador de texto" / Github: https://github.com/platino110/ * * * Colombia 16/08/2022
// variables que guarda los objetos botones seleccionados por el valor id
const encriptar = document.getElementById("encriptar");
const desencriptar = document.getElementById("desencriptar");
const copiar = document.getElementById("copiar");
const pegar = document.getElementById("pegar");
// variables que guarda lel resto de objetos seleccionados por el valor id
const alertaenabled = document.querySelector(".alerta-enabled");
const alertadisabled = document.querySelector(".alerta-disabled");
const textoDefault = document.querySelector(".container-texto-default");
const textoResultado = document.querySelector(".container-boton-copiar");
const texto = document.querySelector(".mensaje-resultado");
const textodesencriptar = document.querySelector(".texto-desencriptar");
const textofinal = document.querySelector(".container-resultado-imagen");

//variable global para manejo de texto a copiar y pegar
var copiado ="";

//metodo para tomar el texto a encriptar, hacer la encripcion y mostrar el texto encriptado 
encriptar.addEventListener("click", () => {
  let entrada = document.getElementById("inputEncriptar").value; //copia el texto ingresado en la variable local validacion
  const validacion = /[A-ZáéíóúÁÉÍÓÚñ!"·$%&/()=?¿^\d*¨;:`+´,./*-_]/gm.test(entrada); //si hay caracteres no permitidos devuelve valor true
  if (!validacion && entrada.length > 0) { //inicio if-else para tomar el texto que cumple las reglas y lo encripta
    const mapa = { e: "enter", i: "imes", a: "ai", o: "ober", u: "ufat",
    }; //variable que guarda las condiciones para encriptar
    entrada = entrada.replace(/e|i|a|o|u/gm, (matched) => { //guarda el texto encriptado en la variable resultado
      return mapa[matched];
    }); //guarda texto encriptado en la variable entrada
    mostrarResultado(entrada); //llamado a la funcion que muestra el texto encriptado en la pagina 
  } else {
    mostrarAlerta(); //llamado a la funcion de alerta por texto que no cumple con las condiciones
  }//fin if-else para tomar el texto que cumple las reglas y lo encripta
}); 

//metodo para tomar el texto a desencriptar, hacer la encripcion y mostrar el texto encriptado 
desencriptar.addEventListener("click", () => {
  let entrada = document.getElementById("inputEncriptar").value; //copia el texto ingresado en la variable local validacion
  const validacion = /[A-ZáéíóúÁÉÍÓÚñ\d!"·$%&/()=?¿^*¨;:`+´,./*-_]/gm.test(entrada); //si hay caracteres no permitidos devuelve valor true
  if (!validacion && entrada.length > 0) { //inicio if-else para tomar el texto que cumple las reglas y lo desencripta
    const mapa = { enter: "e", imes: "i", ai: "a", ober: "o", ufat: "u", 
    }; //variable que guarda las condiciones para desencriptar
    entrada = entrada.replace(/enter|imes|ai|ober|ufat/gm, (matched) => { 
      return mapa[matched]; 
    }); //guarda texto desencriptado en la variable entrada
    mostrarResultado(entrada); //llamado a la funcion que muestra el texto desencriptado en la pagina 
    } else {
    mostrarAlerta(); //llamado a la funcion de alerta por texto que no cumple con las condiciones
  } //fin if-else para tomar el texto que cumple las reglas y lo desencripta
});

//evento para que el boton copie el texto encriptado en el portapapeles
copiar.addEventListener("click", () => {
    copiado = texto.value; //copia el texto desencriptado
    navigator.clipboard.writeText(copiado).then(() => { //modifcacion grafica que indica que se esta ejecutando el proceso de copiado
    copiar.textContent = "Copiando ✅";
    copiar.classList.add("copiar");
    window.setTimeout(() => { copiar.textContent = "Copiar"; }, 1200); //tiempo de duracion de la modifcacion grafica
      return copiado; //retorna el valor copiado
  });
});

//evento para que el boton muestre el texto encriptado que copio con el evento copiar
pegar.addEventListener("click", () =>{
  textodesencriptar.value = copiado; // muestra el texto copiado
  pegar.textContent = "pegando ✅"; //modifcacion grafica que indica que se esta ejecutando el proceso de pegado
  pegar.classList.add("pegar");
  window.setTimeout(() => { pegar.textContent = "Pegar"; }, 1200); //tiempo de duracion de la modifcacion grafica
});

//evento que borra el texto escrito para encriptar y resetear la interfaz grafica
limpiar.addEventListener("click", () =>{
  texto.value = "";
  textodesencriptar.value = "";
  textoDefault.style.display = "block";
  texto.style.display = "none";
  textofinal.style.display = "none";
  alertadisabled.style.display = "block"
  alertaenabled.style.display = "none";
});

//metodo que muestra el texto encriptado
const mostrarResultado = (entrada) => {
  textoDefault.style.display = "none";
  texto.style.display = "block";
  textofinal.style.display = "block";
  texto.value = entrada;
  textoResultado.style.display = "block";
  alertadisabled.style.display = "block"
  alertaenabled.style.display = "none";
};

//metodo que activa la alerta por texto que no cumple con las condiciones
const mostrarAlerta = () => {
  textodesencriptar.value = "";
  alertadisabled.style.display = "none"
  alertaenabled.style.display = "block";
  textoDefault.style.display = "block";
  texto.style.display = "none";
  textofinal.style.display = "none";  
};
