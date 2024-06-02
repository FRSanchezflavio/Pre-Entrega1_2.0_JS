arrayFrutas = ['Pera', 'Manzana', 'Banana', 'Uva'];

for (let i = 0; i < arrayFrutas.length; i++) {
  if (arrayFrutas[i] === 'Manzana') {
    continue;
  }

  alert(arrayFrutas[i]);
  // console.log(arrayFrutas[i]);
}

function calcularEdad() {
  let num = prompt('Ingrese una Edad:');

  if (isNaN(num)) {
    alert('Por favor, ingrese un número válido.');
    return;
  }

  num = parseInt(num);

  if (num >= 0 && num <= 12) {
    alert(`Tienes ${num} años y eres un niño`);
  } else if (num >= 13 && num <= 17) {
    alert(`Tienes ${num} años y eres un adolescente`);
  } else if (num >= 18 && num <= 29) {
    alert(`Tienes ${num} años y eres un adulto joven`);
  } else if (num >= 30 && num <= 50) {
    alert(`Tienes ${num} años y eres un adulto`);
  } else {
    alert(`Tienes ${num} años y eres una persona mayor`);
  }
}

while (true) {
  let opcion = prompt('Elija una opción 1/2/3');

  if (opcion === '1') {
    calcularEdad();
  } else if (opcion === '2') {
    alert("La función 'borrarManzana' no está definida.");
  } else if (opcion === '3') {
    break;
  } else {
    alert('Opción no válida. Por favor, ingrese 1, 2 o 3.');
  }
}
