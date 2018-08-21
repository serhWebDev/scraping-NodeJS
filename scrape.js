const request = require('request');
const cheerio = require('cheerio');

request('https://tproger.ru/category/quiz/', (error, response, html)=>{
    if(!error && response.statusCode == 200) {
        const $ = cheerio.load(html);

        const entryTitle = $('.entry-title-heading');
        console.log(entryTitle.text());
    }
});