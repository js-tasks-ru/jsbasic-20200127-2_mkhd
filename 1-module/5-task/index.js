/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */

function truncate(str, maxlength){
  
  if (str.length < maxlength){
    return str;
  } else{
    
    let resultStr = str.slice(0, 19) + '…';
    return resultStr;
  }
  
}