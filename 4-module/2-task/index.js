function makeDiagonalRed(table) {
  for (let rowIndex = 0; rowIndex < table.rows.length; rowIndex++) {
    let tdDiagonal = table.rows[rowIndex].cells;
    for (let td of tdDiagonal) {
      if (td.cellIndex == rowIndex) {
        td.style.backgroundColor = 'red';
      }
    }
  }
  return table;
}
makeDiagonalRed(table);