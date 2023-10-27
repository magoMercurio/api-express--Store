

class UserService {
  constructor() {
    this.users = [];
    this.generate();
  }

  generate() {

    this.users.push(
      {
        userId: "1",
        name: 'user 1',
        age: 20,
      },
      {
        userId: "2",
        name: 'user 1',
        age: 20,
      },
      {
        userId: "3",
        name: 'user 1',
        age: 20,
      }
    )
  }

  create() {

  }

  find() {
    return this.users;
  }

  findOne(userId) {
    return this.users.find(item => item.userId === userId);
  }

  update() {

  }

  delete() {

  }

}

module.exports = UserService;
