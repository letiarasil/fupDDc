let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let wifi = Boolean;
let login = Boolean;
let admin = Boolean;

if (!wifi == 0){
  console.log("you must connect to wifi");
}
if (!login == 0){
  console.log("you need to login first");
} 
if (!admin == 0){
  console.log("you neet to login as admin");
}