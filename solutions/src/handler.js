class ProductsHandler {
  constructor(service) {
    this._service = service;

    this.addProductHandler = this.addProductHandler.bind(this);
    this.getAllProductsHandler = this.getAllProductsHandler.bind(this);
    this.getOneProductHandler = this.getOneProductHandler.bind(this);
  }

  async addProductHandler(request, h) {
    const { name = 'untitled', price, category } = request.payload;
    const productId = await this._service.addProduct({ name, price, category });

    const response = h.response({
      status: 'success',
      message: 'Product berhasil ditambahkan',
      data: {
        productId
      },
    });

    response.code(201);
    return response;
  }

  async getAllProductsHandler(request, h) {
    const products = await this._service.getAllProducts();
    const response = h.response({
      status: 'success',
      message: 'Product berhasil ditampilkan',
      data: {
        products
      },
    });

    response.code(201);
    return response;
  }

  async getOneProductHandler(request, h) {
    const { id } = request.params;
    const product = await this._service.getOneProduct(id);

    const response = h.response({
      status: 'success',
      message: 'Product berhasil ditampilkan',
      data: {
        product
      }
    });
    response.code(200);
    return response;
  }
}

module.exports = ProductsHandler;