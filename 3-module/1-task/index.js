function namify(users) {
  let namesArr = [];

  users.map(
    item => namesArr.push(item.name)
  );

  return namesArr;
}