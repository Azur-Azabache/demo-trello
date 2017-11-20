window.addEventListener('load', function (event) {
var box1 = document.getElementById('box1');
var father = document.getElementById('father');
// Evento de click sobre "Añade lista..."
box1.addEventListener('click', function (event) {
// Mis nuevos elmentos
  var container = document.createElement('div');
  var input = document.createElement('input');
  var button1 = document.createElement('button');
  var x = document.createElement('p');
  x.textContent = 'X';
  button1.textContent = 'Guardar';
  container.appendChild(input);
  container.appendChild(button1);
  container.appendChild(x);
  father.replaceChild(container,box1);
// Añadiendo css
  father.classList.add("containerStyle");
  button1.classList.add("buttonStyle");
  x.classList.add("xStyle");
  input.setAttribute('placeholder', 'Añadir una lista...');
})

button1.addEventListener('click', function (event) {
var text= input.value;
})
})
