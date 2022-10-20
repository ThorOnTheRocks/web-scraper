const feedDisplay = document.querySelector('#feed');
const localHost = 'http://localhost:8000/results'

fetch(localHost)
  .then(res => res.json())
  .then(data => {
    data.forEach((article) => {
      const articleItem = `<div><h3>` + article.title + `</h3><p>` + article.url + `</p></div`
      feedDisplay.insertAdjacentHTML('beforeend', articleItem);
    })
  })