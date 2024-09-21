let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end = "\n") => process.stdout.write("" + text + end);

let num = +input(),
    pe = input();

write("[", "")
for (let i = 0; i <= 10; i++) {
  if (i != num) {
    if (i == 10) {
      write(" ", "ceu");
    } else {
      write(" ", i + pe);
    }
    pe = (pe == "d" ? "e" : "d");
  }
}
write(" ]")
// pe = (pe == "d" ? "e" : "d");