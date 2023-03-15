const audio1 = document.getElementById("audio1");
const audio2 = document.getElementById("audio2");
const audio3 = document.getElementById("audio3");
const audio4 = document.getElementById("audio4");
const audio5 = document.getElementById("audio5");
const audio6 = document.getElementById("audio6");

document.getElementById("Apple").addEventListener("click", () => {
  audio1.play();
});

document.getElementById("Avocado").addEventListener("click", () => {
  audio2.play();
});

document.getElementById("Banana").addEventListener("click", () => {
  audio3.play();
});

document.getElementById("Blueberry").addEventListener("click", () => {
  audio4.play();
});

document.getElementById("Cherry").addEventListener("click", () => {
  audio5.play();
});

document.getElementById("Dragon Fruit").addEventListener("click", () => {
  audio6.play();
});