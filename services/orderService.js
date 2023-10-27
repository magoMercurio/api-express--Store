

class OrderServices {
  constructor() {
    this.orders = [];
    this.generate();
  }

  generate() {

    this.orders.push(
      {
        id: 1,
        name: 'order 1',
        price: 1000,
      },
      {
        id: 2,
        name: 'order 2',
        price: 2000,
      },
      {
        id: 3,
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

  findOne(id) {
    return this.orders.find(item => item.id === id);
  }

  update() {

  }

  delete() {

  }

}

module.exports = OrderServices;
