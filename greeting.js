module.exports = function greeting() {
  console.clear();
  title();
  rules();
};

function title() {
  let bar = "=".repeat(80);
  console.log(bar);
  console.log();
  console.log(" ".repeat(32), "Flash Node");
  console.log();
  console.log(bar);
}

function rules() {
  let indent = " ".repeat(14);
  console.log();
  console.log(indent, indent, "Instructions:");
  console.log();
  console.log(indent, "> Press the space bar to flip a flash card");
  console.log(indent, "> Use the 'l' key to navigate through the cards");
  console.log(indent, "> Press 'Ctrl' + 'c' to quit.");
  console.log();
  console.log(indent, "Press any key to begin");
  console.log();
}

// prints out greeting as well as instructions
