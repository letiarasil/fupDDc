var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var draft_exports = {};
module.exports = __toCommonJS(draft_exports);
let _cin_ = [];
try {
  _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/);
} catch (e) {
}
let input = () => _cin_.length === 0 ? "" : _cin_.shift();
let write = (text, end = "\n") => process.stdout.write("" + text + end);
let chico = +input();
let cebolinha = +input();
let qtd = +input();
let total = 0;
for (let i = 0; i < qtd; i++) {
  let animal = input();
  if (animal == "c" || animal == "v") {
    total += 4;
  } else if (animal == "g") {
    total += 2;
  }
}
console.log(total);
let distChico = chico - total;
if (distChico < 0) {
  distChico = distChico * -1;
}
let distCebolinha = cebolinha - total;
if (distCebolinha < 0) {
  distCebolinha = distCebolinha * -1;
}
if (distChico == distCebolinha) {
  write("empate");
} else if (distChico > distCebolinha) {
  write("Cebolinha");
} else {
  write("Chico Bento");
}
