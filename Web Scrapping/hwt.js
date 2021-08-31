let request = require("request");
let cheerio = require("cheerio");
let fs = require("fs");
const { replaceElement } = require("domutils");
//data extract cheerio
let url = "https://www.espncricinfo.com/series/england-v-pakistan-2020-1198227/england-vs-pakistan-1st-t20i-1198244/full-scorecard"

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
    //global tool
   let bowlers = searchTool(".table.bowler tbody tr");
//   let htmlData = "";
//    for(let i = 0; i < bowlerTables.length; i++){
//        htmlData += searchTool(bowlerTables[i]).html();
//    }

//loop 
//main
for(let i = 0; i < bowlers.length; i++){
    let cols = searchTool(bowlers[i]).find("td");
    let name = searchTool(cols[0]).text();
    let wickets = searchTool(cols[4]).text();
    console.log(name + " " + wickets);
}
//wicket
   }
console.log("After");
