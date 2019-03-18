const readline = require("readline");

const greeting = require("./greeting");
const cards = require("./cards");
const cardViewer = require("./cardViewer");

function main() {
  greeting();
  let current = 0;
  let side = "front";

  readline.emitKeypressEvents(process.stdin);
  process.stdin.setRawMode(true);

  process.stdin.on("keypress", (str, key) => {
    if (key.ctrl && key.name === "c") {
      process.exit();
    }
    console.clear();
    switch (str) {
      case "\r":
        console.clear();
        cardViewer(cards[current], side);
        break;
      case " ":
        side === "front" ? (side = "back") : (side = "front");
        console.clear();
        cardViewer(cards[current], side);
        break;
      default:
        current++;
        current %= cards.length;
        side = "front";
        console.clear();
        cardViewer(cards[current], side);
        break;

      // default:
      //   greeting();
    }
  });
}

main();

// const stdin = process.stdin;
// stdin.resume();
// stdin.setEncoding("utf-8");
// stdin.on("data", key => {
//   if (key === "\u0003") {
//     process.exit();
//   }
//   process.stdout.write(key);
// });
