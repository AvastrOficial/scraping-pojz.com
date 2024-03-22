# scraping-pojz.com
Se encarga de realizar una solicitud de red a una API externa, obtener datos de esa API y luego mostrarlos en un elemento HTML en la página web.

## Aquí está el desglose del código:

document.getElementById('loadData').addEventListener('click', () => {...}): Este código agrega un "escuchador de eventos" al elemento HTML con el ID loadData. El evento que se está escuchando es un clic del usuario. Cuando el usuario hace clic en este elemento, se ejecuta el código dentro de la función de flecha () => {...}.

Dentro de esta función, se define el comportamiento que ocurrirá cuando se haga clic en el elemento. Este comportamiento consiste en realizar una solicitud de red para obtener datos de una API externa.

const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';: Esto define la URL de un servicio CORS (Cross-Origin Resource Sharing) que permite realizar solicitudes a través de dominios diferentes. Este servicio se utiliza para evitar problemas de seguridad cuando se realiza una solicitud a un servidor desde un origen diferente.

const targetUrl = 'https://www.projz.com/api/f/v1/chat/threads/1478979011737587713';: Esta es la URL de la API a la que se enviará la solicitud para obtener los datos.

const url = corsAnywhereUrl + targetUrl;: Se construye la URL final que se utilizará para realizar la solicitud, combinando la URL del servicio CORS con la URL de la API objetivo.

fetch(url)...: Se utiliza la función fetch para realizar la solicitud de red a la URL construida anteriormente. Esta función devuelve una promesa que se resuelve cuando se completa la solicitud de red.

.then(response => {...}): Después de que se complete la solicitud, se maneja la respuesta de la solicitud. Si la solicitud es exitosa (es decir, el estado de la respuesta es ok), se obtiene el texto de la respuesta.

.then(data => {...}): Una vez que se obtienen los datos de la respuesta, se insertan en un elemento HTML con el ID txtContent. Esto se hace para mostrar los datos en la página web.

.catch(error => console.error('Fetch error:', error));: Si hay algún error durante el proceso de solicitud, se captura y se muestra en la consola del navegador.

## En resumen:
Este código se utiliza para cargar datos desde una API externa cuando un usuario hace clic en un elemento en una página web, y luego mostrar esos datos en la página.
