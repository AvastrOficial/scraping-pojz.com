
document.getElementById('loadData').addEventListener('click', () => {
  const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
  const targetUrl = 'https://www.projz.com/api/f/v1/chat/threads/1478979011737587713';

  const url = corsAnywhereUrl + targetUrl;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      const container = document.getElementById('txtContent');
      container.innerText = data;
    })
    .catch(error => console.error('Fetch error:', error));
});
