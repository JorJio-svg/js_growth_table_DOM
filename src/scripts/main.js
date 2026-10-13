'use strict';

const table = document.querySelector('table');
const tbody = document.querySelector('tbody');
const container = document.querySelector('.container');

const MAX_NUMBER = 10;
const MIN_NUMBER = 2;

const appendColumn = container.querySelector('.append-column');
const removeColumn = container.querySelector('.remove-column');
const appendRow = container.querySelector('.append-row');
const removeRow = container.querySelector('.remove-row');

function updateButtons() {
  const rowsCount = table.rows.length;
  const colomnCount = table.rows[0].cells.length;

  appendColumn.disabled = colomnCount >= MAX_NUMBER;
  removeColumn.disabled = colomnCount <= MIN_NUMBER;
  appendRow.disabled = rowsCount >= MAX_NUMBER;
  removeRow.disabled = rowsCount <= MIN_NUMBER;
}

appendColumn.addEventListener('click', () => {
  [...table.rows].forEach((row) => row.insertCell());
  updateButtons();
});

removeColumn.addEventListener('click', () => {
  [...table.rows].forEach((row) => row.deleteCell(-1));
  updateButtons();
});

appendRow.addEventListener('click', () => {
  const cellCount = table.rows[0].cells.length;
  const newRow = tbody.insertRow();

  for (let i = 0; i < cellCount; i++) {
    newRow.insertCell();
  }

  tbody.appendChild(newRow);
  updateButtons();
});

removeRow.addEventListener('click', () => {
  table.deleteRow(-1);
  updateButtons();
});

// container.addEventListener('click', (e) => {
//   if (e.target === appendColumn) {
//     [...table.rows].forEach((row) => row.insertCell());
//   }

//   if (e.target === removeColumn) {
//     [...table.rows].forEach((row) => row.deleteCell(-1));
//   }

//   if (e.target === appendRow) {
//     const columnsCount = table.rows[0].cells.length;
//     const newRow = table.insertRow();

//     for (let i = 0; i <= columnsCount; i++) {
//       newRow.insertCell();
//     }

//     table.appendChild(newRow);

//     const rowToAppend = table.rows[0].cloneNode(true);

//     table.appendChild(rowToAppend);
//   }

//   if (e.target === removeRow) {
//     table.deleteRow(-1);
//   }

//   updateButtons();
// });
