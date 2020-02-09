/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  
  let newData = data.filter(person => (person.age <= age));
  let result = newData.map(person => (`${person.name}, ${person.balance}`));
  return result.join('\n');

}
