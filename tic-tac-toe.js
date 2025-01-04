const area = document.getElementById("boxarea");
let move = 0;
let result = "";
const modalResult = document.getElementById("box__wrapper-modal-result");
const contentWrapper = document.getElementById("modal-window-content");
const overlay = document.getElementById("overlay");
const modalBtnClose = document.getElementById("modal-window-btn-close");

area.addEventListener("click", (e) => {
  if ((e.target.className = "box")) {
    move % 2 === 0 ? (e.target.innerHTML = "X") : (e.target.innerHTML = "0");
    move++;
    check();
  }
});

const check = () => {
  const boxes = document.getElementsByClassName("box");

  const arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (i = 0; i < arr.length; i++) {
    if (
      boxes[arr[i][0]].innerHTML == "X" &&
      boxes[arr[i][1]].innerHTML == "X" &&
      boxes[arr[i][2]].innerHTML == "X"
    ) {
      result = "хрестіки";
      prepareResult(result);
    } else if (
      boxes[arr[i][0]].innerHTML == "0" &&
      boxes[arr[i][1]].innerHTML == "0" &&
      boxes[arr[i][2]].innerHTML == "0"
    ) {
      result = "ноліки";
      prepareResult(result);
    }
  }
};

const prepareResult = (winner) => {
  contentWrapper.innerHTML = `Перемогли ${winner} !`;
  modalResult.style.display = "block";
};
const closeModal = () => {
  modalResult.style.display = "none";
  location.reload();
};
