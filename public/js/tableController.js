let tables = document.querySelectorAll('.table-available')

document.addEventListener('DOMContentLoaded', () => {
  tables.forEach((table) => {
    table.addEventListener('click', getId);
  });
});

function getId(event) {
  let tableId = event.currentTarget.id
  console.log(tableId);
}