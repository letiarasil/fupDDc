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
function input() {
  let X = input;
  X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/);
  return X.L.shift();
}
function write(text, endl = "\n") {
  process.stdout.write("" + text + endl);
}
let pessoa = +input();
let fila = input().split(" ").map(Number);
let aluno = [];
let servidor = [];
for (let i = 0; i < pessoa; i++) {
  if (fila[i] % 2 == 0) {
    aluno.push(fila[i]);
  } else {
    servidor.push(fila[i]);
  }
}
if (servidor.length == 0) {
  write("[ ]");
} else {
  console.log("[ " + servidor.join(" ") + " ]");
}
if (aluno.length == 0) {
  write("[ ]");
} else {
  console.log("[ " + aluno.join(" ") + " ]");
}
