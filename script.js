//your JS code here. If required.
// Select all squares
const squares = document.querySelectorAll(".square");

// Loop through each square
squares.forEach(sq => {
  // Mouse enters: change other squares to Coffee
  sq.addEventListener("mouseover", () => {
    squares.forEach(otherSq => {
      if (otherSq !== sq) {
        otherSq.style.backgroundColor = "#6F4E37"; // Coffee
      }
    });
  });

  // Mouse leaves: reset all squares to Lavender
  sq.addEventListener("mouseout", () => {
    squares.forEach(s => {
      s.style.backgroundColor = "#E6E6FA"; // Lavender
    });
  });
});
