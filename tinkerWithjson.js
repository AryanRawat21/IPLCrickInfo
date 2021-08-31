let fs = require("fs");
const { fileURLToPath } = require("url");
let xlsx = require("xlsx");
// let buffer = fs.readFileSync("./example.json");
// console.log(buffer);
// console.log("```````````````````````````");
// //array
// let data = JSON.parse(buffer);         //buffer binary data to formated data
let data = require("./example.json");

//console.log(data);
// data.push({
//     "name": "Thor",
//     "last Name": "Rogers",
//     "isAvenger": true,
//     "friends":[
//         "Bruce",
//         "Peter",
//         "Natasha"
//     ],
//     "age": 45,
//     "address": {
//         "city": "New York",
//         "state": "manhatten"
//     }
// });
// let stringData = JSON.stringify(data);  //convert json type data to string
// fs.writeFileSync("example.json", stringData);

// //wb -> filePath, ws -> name, json data 

// //new worksheet
function excelWriter(filePath,json,sheetName){
    let newWB = xlsx.utils.book_new();
    let newWS = xlsx.utils.json_to_sheet(json);
    xlsx.utils.book_append_sheet(newWB, newWS, sheetName);
    xlsx.writeFile(newWB, filePath);
}
    
// //convert json data to excel format
// // -> newWB, ws , sheet name   
//     //filePath
//read
//workbook get
function excelReader(filePath, sheetName){
    if(fs.existsSync(filePath) == false){
        return [];
    }
    let wb = xlsx.readFile(filePath);
    let excelData = wb.Sheets[sheetName];
    let ans = xlsx.utils.sheet_to_json(excelData);
    return;
}


//sheet

//get the data inside sheet

