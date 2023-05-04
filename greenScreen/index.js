const changeColor = document.getElementById("changeColor");
const colorInput = document.getElementById("color");

changeColor.addEventListener("click", function() {
  const color = colorInput.value;
  document.body.style.backgroundColor = color;
});

