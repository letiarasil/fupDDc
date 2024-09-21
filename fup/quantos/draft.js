let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let c1 = +input()
let c2 = +input()
let c3 = +input()

/*if (c1 == c2 && c2 == c3) {
  console.log('3')
}
else if (c1 != c2 && c2 != c3 && c1 != c3){
  console.log('0')
}
else {
  console.log('2')
}*/

if (c1 == c2 && c2 == c3){
  write('3')
}
else if (c1 == c2 || c2 == c3 || c1 == c3){
  write('2')
}
else {
  write('0')
}