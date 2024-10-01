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
function calcular_area(comp12, larg12, comp22, larg22) {
  let area1 = comp12 * larg12;
  let area2 = comp22 * larg22;
  if (area1 > area2) {
    return area1;
  } else if (area2 > area1) {
    return area2;
  }
  return area1;
}
let comp1 = +input();
let larg1 = +input();
let comp2 = +input();
let larg2 = +input();
console.log(calcular_area(comp1, larg1, comp2, larg2));
