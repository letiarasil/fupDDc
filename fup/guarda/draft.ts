let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let wifi: number = +input();
let login: number = +input();
let admin: number = +input();

if (wifi == 0) {
console.log("you must connect to wifi");
} else if (login == 0) {
console.log("you need to login first"); 
} else if (admin == 0) {
console.log("you must to login as admin");
} else if (admin == 1 && wifi == 1 && login == 1) {
console.log("done");
}
