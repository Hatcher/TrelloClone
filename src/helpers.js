export function makeId() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

export function makeUniqueId(arr){
  let id = makeId();
  let matchesArr = arr.filter((entry) => { entry.id === id });
  while(matchesArr.length !== 0){
    let matchesArr = arr.filter((entry) => { entry.id === id });
    id = makeId();
  }
  return id;
}
