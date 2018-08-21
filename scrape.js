const request = require('request');
const cheerio = require('cheerio');

request('https://tproger.ru/', (error, response, html)=>{
    if(!error && response.statusCode == 200) {
        const $ = cheerio.load(html);

        const  siteHeading = $('#primary');
        //console.log(entryTitle.text());
        const output = siteHeading.find('.news-date').next().text();
        console.log(output);
    }
});