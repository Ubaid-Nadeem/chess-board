var box = document.getElementById('box');
var tables = document.createElement('table')
box.appendChild(tables)
for (let i = 1; i <= 8; i++) {
    
    var rows = document.createElement('tr');
    tables.appendChild(rows);

    for (let j = 1; j <= 8; j++) {
        if (i % 2 === 1 && j % 2 === 1) {
            var colm = document.createElement('td');
            rows.appendChild(colm);
            colm.classList = 'black'
        }
        else if (i % 2 === 0 && j % 2 === 0) {
            var colm = document.createElement('td');
            colm.classList = 'black'
            rows.appendChild(colm);
        }
        else {
            var colm = document.createElement('td');
            rows.appendChild(colm)
        }
    }
}
console.log(tables)