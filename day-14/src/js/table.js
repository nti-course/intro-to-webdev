import "../scss/styles.scss";
import * as bootstrap from "bootstrap";

const tableContent = document.querySelectorAll("th,td");
const tableTextContent = Array.from(tableContent).flatMap((element, i) => {
  let colspan = element.getAttribute("colspan");
  if (colspan) {
    colspan = parseInt(colspan, 10);
    return [element.innerText].concat(Array(colspan - 1).fill(""));
  }
  return element.innerText;
});

let chunkSize = 4;
const rowsTextArr = [];
for (let i = 0; i < tableTextContent.length; i += chunkSize) {
  rowsTextArr.push(tableTextContent.slice(i, i + chunkSize).join(","));
}
const tableText = rowsTextArr.join("\n");
const encodedTableText = encodeURIComponent(tableText);

const downloadLink = document.querySelector("a");
const prefix = "data:text/plain;charset=utf-8,";
downloadLink.setAttribute("href", prefix + encodedTableText);
