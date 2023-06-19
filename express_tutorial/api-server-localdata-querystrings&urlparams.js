const express = require('express');
const app = express();
const { products } = require('./data');

app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
});

app.get('/api/products/', (req, res) => {
  const newProducts = products.map((prod) => {
    const { id, name, image } = prod;
    return { id, name, image };
  });
  res.json(newProducts);
});

app.get('/api/products/:productId', (req, res) => {
  const singleProduct = products.find(
    (product) => product.id === Number(req.params.productId)
  );
  if (!singleProduct) return res.status(404).send('Product does not exist');
  const product = ({ id, name, image } = singleProduct);
  return res.json(product);
});

app.get('/api/v1/query', (req, res) => {
  const { search, limit } = req.query;
  let sortedProducts = [...products];
  if (search) {
    const prods = [];
    sortedProducts.map((prod) => {
      if (prod.name.startsWith(search)) prods.push(prod);
    });
    sortedProducts = prods;
  }

  if (limit) sortedProducts = sortedProducts.slice(0, Number(limit));

  if (sortedProducts.length === 0)
    return res.status(200).send('no products matched your search');

  if (sortedProducts.length === products.length) {
    const newProducts = products.map((prod) => {
      const { id, name, image } = prod;
      return { id, name, image };
    });
    return res.status(200).json(newProducts);
  }

  return res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
  console.log('Server is listening on 5000');
});
