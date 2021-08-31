let request = require("request");
let cheerio = require("cheerio");
const { replaceElement } = require("domutils");
//data extract cheerio
let url = "https://www.espncricinfo.com/series/australia-in-bangladesh-2021-1270832/bangladesh-vs-australia-5th-t20i-1270838/ball-by-ball-commentary"

console.log("Before");
request(url, cb);

function cb(error, response, html) {
    //console.log('error:' error);// Print the error if one occured
    //console.log('body:' body);// Print the html for the google
    if (error) {
        console.log(error); // Print the error if one occured
    } else if (response.statusCode == 404) {
        console.log("Page Not Found");
    } else {
        // console.log(html); //Print the HTML for the request
        dataExtractor(html); //Print the html code for the request made
    }
}

function dataExtractor(html) {
    //search tool
    let searchTool = cheerio.load(html);
    let elemRepArr = searchTool(".match-comment-wrapper .match-comment-long-text");
   //console.log(elemRapArr.length)
    //cram this -> this
    let lbc = searchTool(elemRepArr[0]).text();
    console.log("lbc", lbc);
}
console.log("After");
