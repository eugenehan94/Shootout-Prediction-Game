const gridSquares = document.querySelectorAll(".grid-square");
const gloves = document.querySelector(".gloves");

let blocks = document.querySelector("#blocks");
let blocks_single = document.querySelector("#blocks-single");
let blocks_tenth = document.querySelector("#blocks-tenth");

let goals = document.querySelector("#goals");
let goals_single = document.querySelector("#goals-single");
let goals_tenth = document.querySelector("#goals-tenth");

let goalCount = 0;
let blockCount = 0;

let computerChoice = 0;

gridSquares.forEach((square) => {
  square.addEventListener("click", () => {
    computerChoice = Math.floor(
      parseInt(Math.random() * gridSquares.length + 1)
    );

    if (square.id == computerChoice) {
      square.classList.add("blocked-shot");
      result(square.id, computerChoice);
    } else {
      square.classList.add("gloves");
      gridSquares[computerChoice - 1].classList.add("soccer-ball");
      result(square.id, computerChoice);
    }
  });
});

function result(square, computerChoice) {
  if (square == computerChoice) {
    blockCount += 1;
    scoreboardBlocks();
    gridSquares[square - 1].classList.remove("soccer-ball");
    gridSquares[computerChoice - 1].classList.remove("soccer-ball");
    console.log("blocked");
    console.log("blockCount: " + blockCount);
    setTimeout(() => {
      gridSquares[square - 1].classList.remove("blocked-shot");
    }, 500);
  } else {
    console.log("Goal");
    goalCount += 1;

    scoreboardGoals();
    setTimeout(() => {
      gridSquares[square - 1].classList.remove("gloves");
      gridSquares[computerChoice - 1].classList.remove("soccer-ball");
    }, 500);
  }
}

function scoreboardGoals() {
  if (goalCount >= 100) {
    goalCount = 0;
  }

  if (goalCount >= 10) {
    let goalsNumberArray = goalCount.toString().split("");
    goals_tenth.innerHTML = goalsNumberArray[0];
    goals_single.innerHTML = goalsNumberArray[1];
  } else {
    goals_tenth.innerHTML = 0;
    goals_single.innerHTML = goalCount;
  }

  return;
}

function scoreboardBlocks() {
  if (blockCount >= 100) {
    blockCount = 0;
  }
  if (blockCount >= 10) {
    let blockNumberArray = blockCount.toString().split("");
    blocks_tenth.innerHTML = blockNumberArray[0];
    blocks_single.innerHTML = blockNumberArray[1];
  } else {
    blocks_tenth.innerHTML = 0;
    blocks_single.innerHTML = blockCount;
  }
  return;
}
