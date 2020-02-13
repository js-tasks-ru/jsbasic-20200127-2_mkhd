/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {

  
  let ul = document.createElement('ul');
  //let li = document.createElement('li');
  //let insideLi = 'qwe';

  for (let i = 0; i < friends.length; i++){
    let liNew = document.createElement('li');
    liNew.innerHTML = `${friends[i].firstName} ${friends[i].lastName}`;
    ul.append(liNew);
  }
  return ul;
  //document.body.append(ul);
  
  /*
  let listUl = document.createElement('ul');
  let listLi = listUl.append('li');
  listLi.innerHTML = `${friends[0].firstName}`;
  document.body.append(list);  */
}
