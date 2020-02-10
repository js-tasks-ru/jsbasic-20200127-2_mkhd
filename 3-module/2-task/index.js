/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {

  let arr = str.split(' ').join().split(',').filter(item => +isFinite(item));
  max = Math.max(...arr);
  min = Math.min(...arr);
  
  return {min, max};
}
