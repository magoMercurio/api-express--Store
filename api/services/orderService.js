const { faker } = require('@faker-js/faker')


class OrderServices {
  constructor() {
    this.orders = [];
    this.generate();
  }

  generate() {

    this.orders.push(
      {
        orderId: "1",
        name: 'order 1',
        price: 1000,
      },
      {
        orderId: "2",
        name: 'order 2',
        price: 2000,
      },
      {
        orderId: "3",
        name: 'order 3',
        price: 3000,
      }
    )
  }

  create(data) {
    const newOrder = {
      orderId: faker.string.uuid(),
      ...data
    }
    this.orders.push(newOrder);
  }

  find() {
    return this.orders;
  }

  findOne(orderId) {
    return this.orders.find(item => item.orderId === orderId);
  }

  update(orderId, changes) {
    const index = this.orders.findIndex(item => item.orderId === orderId);
    if (index === -1) {
      throw new Error('Order not found');
    }
    const order = this.orders[index]
    this.orders[index] = {
      ...order,
      ...changes
    }
    return this.orders[index];
  }

  delete() {

  }

}

module.exports = OrderServices;
