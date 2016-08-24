var WINDOWS = 1;
var JAW = 0.022;

function round(value, decimals) {
  let precision = Math.pow(10, decimals);
  return Number(Math.round(value * precision) / precision);
}

function calc() {
  let cdpi = document.getElementById("cdpi").value;
  let tdpi = document.getElementById("tdpi").value;
  let sens = document.getElementById("sens").value;

  let result = sens/(tdpi/cdpi) * WINDOWS;
  let edpi = tdpi * result;
  let cm180  = ((180 / JAW) / edpi) * 2.54;

  document.getElementById("result").value = round(result, 2);
  document.getElementById("edpi").value = round(edpi, 0);
  document.getElementById("cm180").value = round(cm180, 2);
}
