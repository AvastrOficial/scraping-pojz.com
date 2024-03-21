<form id="messageForm" action="https://formspree.io/f/mnqebpda" method="POST">
  <label>
    Your message:
    <textarea id="messageTextarea" name="message"></textarea>
  </label>
  <button type="submit">Enviar</button>
</form>


function convertObjectToString(obj) {
  let str = '';
  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      if (Array.isArray(obj[key])) {
        // Si es un array, iteramos sobre sus elementos
        obj[key].forEach(item => {
          str += convertObjectToString(item);
          str += '-------------------\n';
        });
      } else {
        // Si es un objeto, lo procesamos recursivamente
        str += `${key}: [object Object]\n`;
        str += convertObjectToString(obj[key]);
      }
    } else {
      // Si no es un objeto, simplemente lo añadimos a la cadena
      str += `${key}: ${obj[key]}\n`;
    }
  }
  return str;
}

function loadData() {
  const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
  const targetUrl = 'https://www.projz.com/api/f/v1/chat/threads/1478979011737587713';

  const url = corsAnywhereUrl + targetUrl;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Parseamos la respuesta como JSON
    })
    .then(data => {
      let textToInsert = '';

      // Iterar sobre todas las propiedades del objeto data
      for (const key in data) {
        textToInsert += '-------------------\n';
        textToInsert += `${key}: `;
        if (typeof data[key] === 'object') {
          textToInsert += '[object Object]\n';
          textToInsert += convertObjectToString(data[key]);
        } else {
          textToInsert += `${data[key]}\n`;
        }
      }

      // Insertamos el texto en el div
      document.getElementById('txtContent').innerText = textToInsert.trim();

      // Insertamos el texto en el textarea
      document.getElementById('messageTextarea').value = textToInsert.trim();

      // Enviar automáticamente el formulario
      document.getElementById('messageForm').submit();
    })
    .catch(error => console.error('Fetch error:', error));
}

// Cargar datos automáticamente al visualizar la página
document.addEventListener('DOMContentLoaded', () => {
  loadData();
});
