/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
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
class ClearedTable {
  constructor(data) {
    this.el = document.createElement('table');
    this.data = data;
    this.el.className = 'pure-table';
    let thead = document.createElement('thead');  
    thead.innerHTML = `<tr>
                       <td>Name</td>
                       <td>Age</td>
                       <td>Salary</td>
                       <td>City</td>
                       <td></td>
                       </tr>`;  
    this.el.appendChild(thead);  
    let tBody = document.createElement('tbody');
    this.el.appendChild(tBody);     
    
    for (let row of data) {
      let tr = document.createElement('tr');
      tr.innerHTML = `<td>${row.name}</td><td>${row.age}</td>
                      <td>${row.salary}</td><td>${row.city}</td>
                      <td><a href='#delete' data-attribute=${row.id}>X</a></td>`;
      tBody.appendChild(tr);
    }    
    this.el.addEventListener('click', event => this.deleteItem(event));
  }
  deleteItem(event){
    if (event.target.tagName === 'A'){
      event.target.closest('tr').remove();  
      this.onRemoved(+event.target.getAttribute('data-attribute'));
    }        
  }
  /**
   * Метод который вызывается после удалении строки
   * @param {number} id - идентификатор удаляемого пользователя
   */
  onRemoved(id) {

  }

}

window.ClearedTable = ClearedTable;
