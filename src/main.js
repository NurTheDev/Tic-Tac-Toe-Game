let boxes = document.querySelectorAll(".box");
let container = document.querySelector(".container");
let resultLost = document.querySelector(".result-lost");
let turn = "X";
let buttons = document.querySelectorAll("button");
let isGameOver = false;
let imgX = document.getElementById("img2");
let imgO = document.getElementById("img1");
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
        isGameOver = true;
        for (let j = 0; j < 3; j++) {
          boxes[i[j]].style.background = "var(--Accent)";
          boxes[i[j]].style.color = "var(--Secondary)";
          setTimeout(() => {
            container.style.opacity = "0.2";
            document.querySelector(".result-win").style.display = "flex";
            document.querySelector(".container").style.display = "none";
          }, 500);
        }
      }
    }
  }
};
let drawCheck = () => {
  if (!isGameOver) {
    let isDraw = true;
    boxes.forEach((e) => {
      if (e.innerHTML === "") isDraw = false;
    });
    if (isDraw) {
      container.style.opacity = "0.2";
      document.querySelector(".result-lost").style.display = "flex";
      document.querySelector(".container").style.display = "none";
    }
  }
};
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerHTML === "" && !isGameOver) {
      box.innerHTML = turn;
      WinCheck();
      drawCheck();
      if (turn === "X") {
        turn = "O";
        imgX.style.opacity = "0.2";
        imgO.style.opacity = "1";
      } else {
        turn = "X";
        box.style.color = "var(--Accent)";
        imgO.style.opacity = "0.2";
        imgX.style.opacity = "1";
      }
    }
  });
});
for (let button of buttons) {
  button.addEventListener("click", () => {
    isGameOver = false;
    turn = "X";

    boxes.forEach((e) => {
      e.innerHTML = "";
      e.style.removeProperty("background-color");
      e.style.color = "var(--primary)";
    });
    container.style.opacity = "1";
    document.querySelector(".result-lost").style.display = "none";
    document.querySelector(".result-win").style.display = "none";
    document.querySelector(".container").style.display = "flex";
  });
}
