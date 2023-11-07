const { faker } = require('@faker-js/faker')


class Categoryservices {

  constructor() {
    this.categories = [];
    this.generate();
  }

  generate() {

    this.categories.push(
      {
        categoryId: "1",
        category: 'Food',
        products: []
      },
      {
        categoryId: "2",
        category: 'Games',
        products: []
      },
      {
        categoryId: "3",
        category: 'clothes',
        products: []
      },
    )
  }

  create(data) {
    const newCategory = {
      categoryId: faker.string.uuid(),
      ...data
    }
    this.categories.push(newCategory);
  }

  find() {
    return this.categories;
  }

  findOne(categoryId) {
    return this.categories.find(item => item.categoryId === categoryId);

  }

  update(categoryId, changes) {
    const index = this.categories.findIndex(item => item.categoryId === categoryId);
    if (index === -1) {
      throw new Error('Category not found');
    }
    const category = this.categories[index];
    this.categories[index] = {
      ...category,
      ...changes
    }
  }

  delete() {

  }

}

module.exports = Categoryservices;
