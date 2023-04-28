type ProductT = {
  name: string;
  price: number;
  stock: number;
};

const products: ProductT[] = [
  {
    name: 'Pasta dental',
    price: 1000,
    stock: 100,
  },
  {
    name: 'Pasta dental',
    price: 1000,
    stock: 100,
  },
  {
    name: 'Pasta dental',
    price: 1000,
    stock: 100,
  },
  {
    name: 'Pasta dental',
    price: 1000,
    stock: 100,
  },
  {
    name: 'Pasta dental',
    price: 1000,
    stock: 100,
  },
  {
    name: 'Pasta dental',
    price: 1000,
    stock: 0,
  },
];

const hasStockList = (products: ProductT[]): boolean[] => {
  return products.map((product: ProductT) => product?.stock > 0);
};

const productsHasStock = hasStockList(products);

export { productsHasStock };
