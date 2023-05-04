const moveUp = document.getElementById("moveUp")
const moveDown = document.getElementById("moveDown")
const crane = document.getElementById("crane")

for(let i = 0;i < 10;i++ ){
    moveUp.addEventListener("click", function() {
        const crane = document.getElementById("crane")
        crane.style.marginTop = "10px";
      });


    moveDown.addEventListener("click", function() {
        const crane = document.getElementById("crane")
        crane.style.marginTop = "90px";
    });


}
