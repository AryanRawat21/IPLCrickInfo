let cheerio = require("cheerio");
let request = require("request");
console.log("Before");
request('https://www.npmjs.com/package/cheerio', cb);

function cb(error, response, html) {
    //console.log('error:' error);// Print the error if one occured
    //console.log('body:' body);// Print the html for the google
    if (error) {
        console.log(error); // Print the error if one occured
    } else if (response.statusCode == 404) {
        console.log("Page Not Found");
    } else {
        //console.log(html); //Print the HTML for the request
        dataExtractor(html); //Print the html code for the request made
    }
}

function dataExtractor(html) {
    //search tool
    let searchTool = cheerio.load(html);
    //css selector -> elem

    let elemRep = searchTool("#readme>h1");
    //text
    let moduleName = elemRep.text().trim();
    console.log("moduleName", moduleName);
}
console.log("After");