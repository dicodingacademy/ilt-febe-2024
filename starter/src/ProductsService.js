const { Pool } = require('pg');
const { nanoid } = require('nanoid');

class ProductsService {
  constructor() {
    this._pool = new Pool();
  }

  /**
 * @TODO 3
 * Define function to save product
 */

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
