const readline = require("readline");

module.exports = function inControl() {
  readline.emitKeypressEvents(process.stdin);
  process.stdin.setRawMode(true);

  process.stdin.on("keypress", (str, key) => {
    if (key.ctrl && key.name === "c") {
      process.exit();
    }
    switch (key.name) {
      case "k":
    }
  });
};
