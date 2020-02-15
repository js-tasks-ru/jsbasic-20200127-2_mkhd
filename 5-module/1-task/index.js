/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  
  for (let i=0; i < table.rows.length; i++){
    for (let j=0; j < table.rows[i].cells.length; j++){

      // Проставить класс available/unavailable, 
      // в зависимости от значения атрибута data-available у ячейки Status
      if(table.rows[i].cells[j].getAttribute('data-available') === 'true') {
        table.rows[i].classList.add('available');        
      } else if(table.rows[i].cells[j].getAttribute('data-available') === 'false') {
        table.rows[i].classList.add('unavailable');        
      } else if(!table.rows[i].cells[j].hasAttribute('data-available')) {  //Проставить атрибут hidden, если такого атрибута нет вообще
        table.rows[i].hidden = true;
      }
      
      // Проставить класс male/female, в зависимости от содержимого ячейки Gender
      if(table.rows[i].cells[j].innerHTML === 'm') {
        table.rows[i].classList.toggle('male');
      } else if(table.rows[i].cells[j].innerHTML === 'f') {
        table.rows[i].classList.toggle('female');
      }

      // Установить inline-стиль style=«text-decoration: line-through», если значение ячейки Age меньше 18
      if(isFinite(table.rows[i].cells[j].innerHTML) && (table.rows[i].cells[j].innerHTML < 18) ){
        table.rows[i].setAttribute('style', 'text-decoration: line-through');
      }
    }  
  }
}
