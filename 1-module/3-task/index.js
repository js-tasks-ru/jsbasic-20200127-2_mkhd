/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */

function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}




/*
  let resultStr = '';
  
  if(!str) {
    return '';
  } else{
    let firstChar = str[0].toUpperCase();  
    resultStr = firstChar;
  
    for (let i=1; i < str.length; i++){
      resultStr += str[i];
    }
    return resultStr;
  }
*/
