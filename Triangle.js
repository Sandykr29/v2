// Note:- In the given problem , for shapeType Triangle making rows and columns different is not providing desired look so rows must be equal to columns

function drawShape(shapeType, alignment, drawChar, rows, columns) {
    if (shapeType === "square" && alignment === "solid") {
        Squre(drawChar, rows, columns);
    } else if (shapeType === "square" && alignment === "hollow") {
        HollowSqure(drawChar, rows, columns);
    } else if (shapeType === "triangle" && alignment === "left") {
        TriangleLeft(rows, drawChar);
    } else if (shapeType === "triangle" && alignment === "right") {
        TriangleRight(rows, drawChar);
    } else if (shapeType === "triangle" && alignment === "center") {
        TriangleCenter(rows, drawChar);
    } else {
        console.log("Invalid shape type or alignment.");
    }
  }
  
  // Given functions
  
  function TriangleRight(rows, drawChar) {
    for (let i = 0; i <= rows; i++) {
        let row = '';
        for (let j = rows; j >= 0; j--) {
            if (j < i) {
                row += `${drawChar}`;
            } else {
                row += ' ';
            }
        }
        console.log(row);
    }
  }
  
  function TriangleLeft(rows, drawChar) {
    for (let i = 0; i < rows; i++) {
        let str = "";
        for (let k = 0; k <= i; k++) {
            str += `${drawChar}`;
        }
        console.log(str);
    }
  }
  
  function TriangleCenter(rows, drawChar) {
    for (let i = 0; i < rows; i++) {
        let str = "";
        for (let j = 0; j < rows - i; j++) {
            str += " ";
        }
        for (let k = 0; k <= i; k++) {
            str += `${drawChar} `;
        }
        console.log(str);
    }
  }
  
  function Squre(drawChar, rows, columns) {
    for (let i = 0; i < rows; i++) {
        let str = "";
        for (let j = 0; j < columns; j++) {
            str += `${drawChar} `;
        }
        console.log(str);
    }
  }
  
  function HollowSqure(drawChar, rows, columns) {
    for (let i = 0; i < rows; i++) {
        let str = "";
        for (let j = 0; j < columns; j++) {
            if (i === 0 || i === rows - 1 || j === 0 || j === columns - 1) {
                str += `${drawChar}`;
            } else {
                str += " ";
            }
        }
        console.log(str);
    }
  }
  
  // Example usage keep uncommenting one by one...
  
  // drawShape(shapeType, alignment, drawChar, rows, columns)
  // drawShape("square", "solid", "*", 5, 5);
  // drawShape("square", "hollow", "*", 5, 5);
  // drawShape("triangle", "right", "*", 5, 5);
  // drawShape("triangle", "left", "*", 5, 5);
  // drawShape("triangle", "center", "*", 5, 5);