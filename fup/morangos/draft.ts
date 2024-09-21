let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

function calcular_area (comp1: number, larg1: number, comp2: number, larg2: number): number{
  let area1 = comp1 * larg1;
  let area2 = comp2 * larg2;
  
  if (area1 > area2){
    return (area1);
  } else if (area2 > area1){
      return (area2);
  } 
  return(area1);
}

let comp1: number = +input();
let larg1: number = +input();
let comp2: number = +input();
let larg2: number = +input();

console.log(calcular_area(comp1, larg1, comp2, larg2));

// let comp1: number = +input();
// let larg1: number = +input();
// let comp2: number = +input();
// let larg2: number = +input();

// let area1 = comp1 * larg1;
// let area2 = comp2 * larg2;

// if (area1 > area2){
//   console.log(area1);
// } else if (area2 > area1){
//     console.log(area2);
// } else {
//   console.log(area1);
// }
