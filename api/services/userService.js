const { faker } = require('@faker-js/faker')

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

  create(data) {
    const newUser = {
      userId: faker.string.uuid(),
      ...data
    }
    this.users.push(newUser);
    return newUser;


  }

  find() {
    return this.users;
  }

  findOne(userId) {
    return this.users.find(item => item.userId === userId);
  }

  update(userId, changes) {
    const index = this.users.findIndex(item => item.userId === userId);
    if (index === -1) {
      throw new Error('User not found');
    }
    const user = this.users[index];
    this.users[index] = {
      ...user,
      ...changes
    }
    return this.users[index];
  }

  delete(userId) {
    const index = this.users.findIndex(item => item.userId === userId);
    if (index === -1) {
      throw new Error('User not found');
    }
    this.users.splice(index, 1);
    return { message: 'User deleted', userId: userId };
  }

}

module.exports = UserService;
