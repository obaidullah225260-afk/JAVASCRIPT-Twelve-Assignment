let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");

let p1Bottom = 50,
  p1Left = 0;
let p2Bottom = 50,
  p2Left = 100;

let playerHeight = 200; // adjust to your player img height
let playerWidth = 100; // adjust to your player img width

document.addEventListener("keydown", function (event) {
  // How Find your KEYS:
  // console.log(event.key);

  // Player1: W S A D - using LEFT only
  if (event.key === "w" && p1Bottom < window.innerHeight - playerHeight - 50) {
    p1Bottom += 10;
    player1.style.bottom = p1Bottom + "px";
    player1.src = "images/iron-fly.gif";
    player1.style.height = "350px";
    player1.style.width = "250px";
  }
  if (event.key === "s" && p1Bottom > 0) {
    p1Bottom -= 10;
    player1.style.bottom = p1Bottom + "px";
    player1.src = "images/iron-fly.gif";
    player1.style.height = "350px";
    player1.style.width = "250px";
  }
  if (event.key === "a" && p1Left > 0) {
    p1Left -= 10;
    player1.style.left = p1Left + "px";
    player1.style.height = "250px";
    player1.style.width = "250px";
    player1.src = "images/iron-walk.gif";
    player1.style.transform = "scaleX(-1)"; // face left
  }
  if (event.key === "d" && p1Left < window.innerWidth - 250) {
    p1Left += 10;
    player1.style.left = p1Left + "px";
    player1.style.height = "250px";
    player1.style.width = "250px";
    player1.src = "images/iron-walk.gif";
    player1.style.transform = "scaleX(1)"; // face right
  }
  if (event.key === " " && p1Left < window.innerWidth - 250) {
    p1Left += 10;
    player1.style.left = p1Left + "px";
    player1.style.height = "250px";
    player1.style.width = "250px";
    player1.src = "images/iron-dash.gif";
    player1.style.transform = "scaleX(1)"; // face right
  }
  if (event.key === "Backspace" && p1Left < window.innerWidth - -250) {
    p1Left -= 10;
    player1.style.left = p1Left + "px";
    player1.style.height = "250px";
    player1.style.width = "250px";
    player1.src = "images/iron-dash.gif";
    player1.style.transform = "scaleX(-1)"; // face right
  }
  if (event.key === "f" && p1Left < window.innerWidth - 250) {
    // p1Left += 10;
    // player1.style.left = p1Left + "px";
    player1.style.height = "250px";
    player1.style.width = "350px";
    player1.src = "images/iron-fierce.gif";
    player1.style.transform = "scaleX(1)"; // face right
  }
  if (event.key === "p" && p1Left < window.innerWidth - 250) {
    // p1Left += 10;
    // player1.style.left = p1Left + "px";
    player1.style.height = "500px";
    player1.style.width = "500px";
    player1.src = "images/iron-unibeam.gif";
    player1.style.transform = "scaleX(1)"; // face right
  }
  if (event.key === "o" && p1Left < window.innerWidth - 250) {
    // p1Left += 10;
    // player1.style.left = p1Left + "px";
    player1.style.height = "500px";
    player1.style.width = "500px";
    player1.src = "images/iron-standattax.gif";
    player1.style.transform = "scaleX(1)"; // face right
  }
  // Player2: Arrow keys - also using LEFT only
  if (
    event.key === "ArrowUp" &&
    p2Bottom < window.innerHeight - playerHeight - 50
  ) {
    p2Bottom += 10;
    player2.style.bottom = p2Bottom + "px";
    player2.src = "images/hulk-ch3.gif";
  }
  if (event.key === "ArrowDown" && p2Bottom > 0) {
    p2Bottom -= 10;
    player2.style.bottom = p2Bottom + "px";
    player2.src = "images/hulk-ch3.gif";
  }
  if (event.key === "ArrowLeft" && p2Left > -10) {
    p2Left -= 10;
    player2.style.left = p2Left + "px";
    player2.src = "images/hulk-walk.gif";
    player2.style.transform = "scaleX(-1)";
  }
  if (event.key === "ArrowRight" && p2Left < window.innerWidth - 250) {
    p2Left += 10;
    player2.style.left = p2Left + "px";
    player2.src = "images/hulk-walk.gif";
    player2.style.transform = "scaleX(1)";
  }
  if (event.key === "Shift" && p2Left < window.innerWidth - 250) {
    p2Left += 10;
    player2.style.left = p2Left + "px";
    player2.src = "images/hulk-special2.gif";
    player2.style.transform = "scaleX(1)";
  }
  if (event.key === "Control" && p2Left < window.innerWidth - -50) {
    p2Left -= 10;
    player2.style.left = p2Left + "px";
    player2.src = "images/hulk-special2.gif";
    player2.style.transform = "scaleX(-1)";
  }
  if (event.key === "g" && p2Left < window.innerWidth - 250) {
    // p2Left += 10;
    // player2.style.left = p2Left + "px";
    player2.src = "images/hulk-morerox.gif";
    player2.style.transform = "scaleX(-1)";
  }
  if (event.key === "k" && p2Left < window.innerWidth - 250) {
    // p2Left += 10;
    // player2.style.left = p2Left + "px";
    player2.style.height = "400px";
    player2.style.width = "400px";
    player2.src = "images/hulk-throw.gif";
    player2.style.transform = "scaleX(-1)";
  }
});
// player1 moves:
console.log("W To Up IronMan");
console.log("S To Down IronMan");
console.log("A To Left IronMan");
console.log("D To Right IronMan");
console.log("F To Punch IronMan");
console.log("P To Special2 IronMan");
console.log("O To Block IronMan");
// player2 moves:
console.log("ArrowUp To Up Hulk");
console.log("ArrowDown To Down Hulk");
console.log("ArrowLeft To Left Hulk");
console.log("ArrowRight To Right Hulk");
console.log("Shift To Punch Hulk");
console.log("Control To Punch Hulk");
console.log("G To Morerox IronMan");
console.log("K To Throw IronMan");
// How Find Your Screen Size:
// console.log(window.innerWidth);
