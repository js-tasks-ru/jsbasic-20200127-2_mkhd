/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */

function checkSpam(str){
  
  newStr = str.toLowerCase();
  
  if ( (newStr.indexOf('1xbet') != -1) ||
       (newStr.indexOf('xxx') != -1) 
      ) return true;

  return false;
  
}
