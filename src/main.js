let boxes = document.querySelectorAll(".box");

let turn = "X";
let button = document.querySelector("button");
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerHTML === "" && turn === "X") {
      box.innerHTML = turn;
      turn = "O";
    } else if (box.innerHTML === "" && turn === "O") {
      box.innerHTML = turn;
      box.style.color = "var(--Accent)";
      turn = "X";
    }
    WinCheck();
  });
  let WinCheck = () => {
    let winCondition = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i of winCondition) {
      let val1 = boxes[i[0]].innerHTML;
      let val2 = boxes[i[1]].innerHTML;
      let val3 = boxes[i[2]].innerHTML;
      if (val1 != "" && val2 != "" && val3 != "") {
        if (val1 === val2 && val2 === val3) {
          console.log("win");
          box.style.background = "red";
        }
      }
    }
  };
});
