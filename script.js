let input = document.getElementById("input");
let submit = document.getElementById("submit");
let output = document.getElementById("output");

function printMultiple() {
  let number = Number(input.value);
  let outputHtml = "";

  if (number <= 0) {
    output.innerHTML = "ไม่บอกกกกก!!";
    return;
  }

  for (let i = 1; i <= 12; i++) {
    outputHtml += `<p>`;
    outputHtml += number + " x " + i + " = " + number * i;
    outputHtml += "</p>";
  }

  output.innerHTML = outputHtml;
}

submit.addEventListener("click", printMultiple);
