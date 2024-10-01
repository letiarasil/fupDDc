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
let qtdCartas = +input();
let valores = input().split(" ");
function cartas(carta) {
  if (carta == "1") {
    carta = "A";
  }
  if (carta == "11") {
    carta = "J";
  }
  if (carta == "12") {
    carta = "Q";
  }
  if (carta == "13") {
    carta = "K";
  }
  return carta;
}
write("[", "");
for (let i = 0; i < qtdCartas; i++) {
  if (i != 0) {
    write(", ", "");
  }
  write(cartas(valores[i]), "");
}
write("]");
