const audio1 = document.getElementById("audio1");
const audio2 = document.getElementById("audio2");
const audio3 = document.getElementById("audio3");
const audio4 = document.getElementById("audio4");
const audio5 = document.getElementById("audio5");
const audio6 = document.getElementById("audio6");


document.getElementById("Cat").addEventListener("click", () => {
  audio1.play();
});

document.getElementById("Dog").addEventListener("click", () => {
  audio2.play();
});

document.getElementById("Rabbit").addEventListener("click", () => {
  audio3.play();
});

document.getElementById("Elephant").addEventListener("click", () => {
  audio4.play();
});

document.getElementById("Zebra").addEventListener("click", () => {
  audio5.play();
});

document.getElementById("Giraffe").addEventListener("click", () => {
  audio6.play();
});

