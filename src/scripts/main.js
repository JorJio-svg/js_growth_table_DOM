'use strict';

const table = document.querySelector('table');
const container = document.querySelector('.container');

const MAX_NUMBER = 10;
const MIN_NUMBER = 2;

const appendColumn = container.querySelector('.append-column');
const removeColumn = container.querySelector('.remove-column');
const appendRow = container.querySelector('.append-row');
const removeRow = container.querySelector('.remove-row');

function updateButtons() {
  const rowsAmount = table.rows.length;
  const colomnAmount = table.rows[0].cells.length;

  appendColumn.disabled = colomnAmount >= MAX_NUMBER;
  removeColumn.disabled = colomnAmount <= MIN_NUMBER;
  appendRow.disabled = rowsAmount >= MAX_NUMBER;
  removeRow.disabled = rowsAmount <= MIN_NUMBER;
}

container.addEventListener('click', (e) => {
  if (e.target === appendColumn) {
    [...table.rows].forEach((row) => row.insertCell());
  }

  if (e.target === removeColumn) {
    [...table.rows].forEach((row) => row.deleteCell(-1));
  }

  if (e.target === appendRow) {
    const rowClone = table.rows[0].cloneNode(true);

    table.append(rowClone);
  }

  if (e.target === removeRow) {
    table.deleteRow(-1);
  }

  updateButtons();
});
