const { Pool } = require('pg');
const { nanoid } = require('nanoid');

class ProductsService {
  constructor() {
    this._pool = new Pool();
  }

  async addProduct({ name, price, category }) {
    const id = nanoid(16);
    const query = {
      text: 'INSERT INTO products VALUES($1, $2, $3, $4) RETURNING id',
      values: [id, name, price, category],
    };

    const result = await this._pool.query(query);
    return result.rows[0].id;
  }

  async getAllProducts() {
    const result = await this._pool.query('SELECT * FROM products');

    if (!result.rows.length) {
      console.log('Produk tidak ditemukan');
    }
    console.log(result);

    return result.rows;
  }

  async getOneProduct(id) {
    const query = {
      text: 'SELECT * FROM products WHERE id = $1',
      values: [id],
    };

    const result = await this._pool.query(query);
    return result.rows[0];
  }
}

module.exports = ProductsService;
