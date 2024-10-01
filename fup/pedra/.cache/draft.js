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
let num = +input();
let vetA = [];
let vetB = [];
for (let i = 0; i < num; i++) {
  let lista = input().split(" ").map(Number);
  vetA.push(lista[0]);
  vetB.push(lista[1]);
}
let ref = -1;
for (let i = 0; i < num; i++) {
  if (vetA[i] >= 10 && vetB[i] >= 10) {
    Math.abs(vetA[i] - vetB[i]);
    if (ref == -1) {
      ref = i;
    } else if (Math.abs(vetA[i] - vetB[i]) < Math.abs(vetA[ref] - vetB[ref])) {
      ref = i;
    }
  }
}
if (ref == -1) {
  write("sem ganhador");
} else {
  console.log(ref);
}
