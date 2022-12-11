let fs = require("fs");
// const { clearScreenDown } = require("readline");
// let { a } = require("./f1");

//? File system module

//! writing to file
// fs.writeFileSync("./f1.js", `let a= [10,20,30,40,50]; module.exports=a`, () => {
//   console.log("file created");
// });

//! reading file
// fs.readFile("./f1.js", (err, data) => {
//   console.log(data.toString());
//   console.log(err);
// });

//! Checking if present and then reading
// if (fs.existsSync("./f2.js")) {
//   console.log("reading file.....");
//   fs.readFile("./f1.js", (err, data) => {
//     console.log(data.toString());
//     console.log(err);
//   });
// } else {
//   console.log("file is not present");
// }

//! creating folder
// fs.mkdir("././/images", err => {
//   console.log(err);
// });

//! deleting folder
// fs.rmdir("./images", err => {
//   console.log(err);
// });

//! deleting file
// fs.unlink("./f1.js", err => {
//   console.log(err);
// });

//! rename file
// fs.rename("./index.js", "./lesson1.js", err => {
//   console.log(err);
// });

console.log(fs.createReadStream("./demo.text"));
