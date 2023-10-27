
class Categoryservices {

  constructor() {
    this.categories = [];
    this.generate();
  }

  generate() {

    this.categories.push(
      {
        categoryId: 1,
        category: 'Food',
        products: []
      },
      {
        categoryId: 2,
        category: 'Games',
        products: []
      },
      {
        categoryId: 3,
        category: 'clothes',
        products: []
      },
    )
  }

  create() {

  }

  find() {
    return this.categories;
  }

  findOne(categoryId) {
    return this.categories.find(item => item.categoryId === categoryId);

  }

  update() {

  }

  delete() {

  }

}

module.exports = Categoryservices;
