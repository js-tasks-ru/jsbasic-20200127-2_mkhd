/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {

  let ul = document.createElement('ul');

  for (let i = 0; i < friends.length; i++){
    let liNew = document.createElement('li');
    liNew.innerHTML = `${friends[i].firstName} ${friends[i].lastName}`;
    ul.append(liNew);
  }
  return ul;

}
