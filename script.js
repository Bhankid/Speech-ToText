const btn = document.getElementById("btn");
const results = document.getElementById("result");
const speechRecognition =
  window.speechRecognition || window.webkitSpeechRecognition;
const recognition = new speechRecognition();

recognition.onstart = () => {
  console.log("You can speak now");
};

recognition.onresult = (event) => {
  const text = event.results[0][0].transcript;
  console.log(text);
  results.innerHTML = text;
};

function copyDivToClipboard() {
  const range = document.createRange();
  range.selectNode(results);
  navigator.clipboard.writeText(range.toString()).then(() => {
    alert("Copied text:");
  });
}
