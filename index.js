const URL = 'https://www.economist.com/';
const PORT = 8000;
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const cors = require('cors')


const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.json('Hello Gianluca')
})

app.get('/results', (req, res) => {
  axios(URL)
    .then(response => {
      const html = response.data
      const $ = cheerio.load(html)
      articles = []


      $('.css-17glo8i', html).each(function () {
        const title = $(this).find('h3').text();
        const url = $(this).find('a').attr('href');

        articles.push({
          title,
          url
        })
      })
      // console.log(articles)
      res.json(articles)
    }).catch(err => console.log(err))
})



app.listen(PORT, () => console.log(`server running on PORT: ${PORT}`));
