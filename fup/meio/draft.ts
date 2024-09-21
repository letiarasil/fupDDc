let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let tam1: number = +input();
let tam2: number = +input();
let tam3: number = +input();

if (tam3 > tam1 && tam1 > tam2){
  console.log(tam1);
} else if (tam2 > tam1 && tam1 > tam3){
  console.log(tam1);
} else if (tam1 > tam2 && tam2 > tam3){
    console.log(tam2);
} else if (tam3 > tam2 && tam2 > tam1){
      console.log(tam2);
  } else {
    console.log(tam3);
}

// if (tam1 > tam2 && tam2 > tam3){
//   console.log(tam2);
// } else if (tam2 > tam1 && tam1 > tam3){
//   console.log(tam1);
// } else if (tam3 > tam1 && tam1 > tam2){
//     console.log(tam1);
// } else if (tam3 > tam2 && tam2 > tam1){
//       console.log(tam2);
//   } else {
//     console.log(tam3);
// }