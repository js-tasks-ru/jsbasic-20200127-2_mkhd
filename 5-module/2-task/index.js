/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {
  /**
   * @property {Element} - обязательно свойство, которое ссылается на элемент <table>
   */
  
  this.el = document.createElement('table');
  this.el.id = "table";
  let thead = document.createElement('thead');
  
  thead.innerHTML = `<tr>
                     <td>Name</td>
                     <td>Age</td>
                     <td>Salary</td>
                     <td>City</td>
                     </tr>`;

  this.el.appendChild(thead);  
  let tBody = document.createElement('tbody');
  this.el.appendChild(tBody);
   
  
  for (let row of items) {
    let tr = document.createElement('tr');
    tr.innerHTML = `<td>${row.name}</td><td>${row.age}</td><td>${row.salary}</td><td>${row.city}</td>`;
    tBody.appendChild(tr);
  }
  
  /**
   * Метод выполняет сортировку таблицы
   * @param {number} column - номер колонки, по которой
   * нужно выполнить сортировку (отсчет начинается от 0)
   * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
   */
  this.sort = (column, desc = false) => {
    let sortedRows = Array.from(this.el.tBodies[0].rows)
    .sort((rowA, rowB) => {
      if(!desc) {
        if( isFinite(+rowA.cells[column].innerHTML) ){
          return +rowA.cells[column].innerHTML > +rowB.cells[column].innerHTML ? 1 : -1;
        } else {
          return rowA.cells[column].innerHTML > rowB.cells[column].innerHTML ? 1 : -1;
        }
      } else {
        if( isFinite(+rowA.cells[column].innerHTML) ){
          return +rowA.cells[column].innerHTML > +rowB.cells[column].innerHTML ? -1 : 1;
        } else {
          return rowA.cells[column].innerHTML > rowB.cells[column].innerHTML ? -1 : 1;
        }
      }
      
    });

    this.el.tBodies[0].append(...sortedRows);
    
    
  };
}
