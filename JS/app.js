window.addEventListener('load', function(event) {
  var box1 = document.getElementById('box1');
  var father = document.getElementById('father');
  var box2 = document.getElementById('box2');
  // Evento de click sobre "Añade lista..."
  box1.addEventListener('click', function(event) {
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
    father.replaceChild(container, box1);
    // Añadiendo css
    father.classList.add('containerStyle');
    button1.classList.add('buttonStyle');
    x.classList.add('xStyle');
    input.setAttribute('placeholder', 'Añadir una lista...');
    // Agregando la nueva caja al presionar el botón guardar
    button1.addEventListener('click', function(event) {
    // Atrapando el texto
      var text = input.value;
      var containerText = document.createElement('div');
      var title = document.createElement('p');
      var link = document.createElement('p');
      //  Añadiendo el texto capturado anteriormente
      title.textContent = text;
      link.textContent = 'Añadir una tarea';
      containerText.appendChild(title);
      containerText.appendChild(link);
      box2.appendChild(containerText);
      box2.classList.add('containerStyle');
      link.classList.add('linkStyle');
      link.addEventListener('click', function(event) {
        var textArea = document.createElement('textArea');
        var button2 = document.createElement('button');
      });
    });
  });
});
