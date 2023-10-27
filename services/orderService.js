

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

  create() {

  }

  find() {
    return this.orders;
  }

  findOne(orderId) {
    return this.orders.find(item => item.orderId === orderId);
  }

  update() {

  }

  delete() {

  }

}

module.exports = OrderServices;
