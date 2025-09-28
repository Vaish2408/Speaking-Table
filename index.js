let eleContainer = document.querySelector(".containrr");
let eleInput = document.getElementById("input");
let eleMessage = document.querySelector(".message");
let eleButton = document.querySelector("button");

eleButton.addEventListener("click", () => {
  let num = eleInput.value;
  if (isNaN(num)) {
    eleMessage.innerHTML = `Please enter a number`;
  } else showTable(num);
});

function showTable(num) {
  let i = 1;
  let id = window.setInterval(() => {
    eleContainer.innerHTML += `<h1 class = "containrr">${num} * ${i} = ${
      num * i
    }</h1>`;
    speak(`${num} into ${i} is ${num * i}`);
    i++;
    if (i == 11) {
      window.clearInterval(id);
    }
  }, 3000);
}

function speak(text) {
  let speech = new SpeechSynthesisUtterance();
  speech.lang = "en-US";
  speech.text = text;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
}
