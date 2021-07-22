function showSalary(users, age) {
  let usersFilterAge = users.filter(user => user.age <= age);
  return usersFilterAge.map(user => user.name + ", " + user.balance)
    .join("\n");
}