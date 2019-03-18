module.exports = function cardViewer(card, side) {
  let hor = "-".repeat(78);
  let indent = " ".repeat(14);
  let vert = "|";
  let ws = " ".repeat(77);
  console.log(" ", hor);
  console.log(vert, ws, vert);
  console.log(vert, ws, vert);
  console.log(indent, card[side]);
  console.log(vert, ws, vert);
  console.log(vert, ws, vert);
  console.log(vert, ws, vert);
  console.log(" ", hor);
};

// simply displays one side of a flashcard object
