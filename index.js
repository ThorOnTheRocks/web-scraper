const URL = 'https://www.economist.com/';
const PORT = 8000;
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const app = express();


axios(URL)
  .then(res => {
    const html = res.data
    const $ = cheerio.load(html)
    const articles = []


    $('.css-17glo8i', html).each(function () {
      const title = $(this).find('h3').text();
      const url = $(this).find('a').attr('href');

      articles.push({
        title,
        url
      })
    })
    console.log(articles)
  }).catch(err => console.log(err))

app.listen(PORT, () => console.log(`server running on PORT: ${PORT}`));
