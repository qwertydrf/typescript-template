type ProductT = {
  title: string;
  price: number;
  stock: number;
};

const products: ProductT[] = [
  {
    title: 'Pasta dental',
    price: 3000,
    stock: 150,
  },
  {
    title: 'Papel',
    price: 2000,
    stock: 0,
  },
  {
    title: 'Scotch',
    price: 500,
    stock: 50,
  },
  {
    title: 'Cargador',
    price: 7500,
    stock: 100,
  },
  {
    title: 'Calefactor',
    price: 10000,
    stock: 0,
  },
  {
    title: 'Agua',
    price: 1000,
    stock: 200,
  },
];

const getOnlyNameProduct = (products: ProductT[]): Partial<ProductT>[] => {
  return products?.map((product: ProductT) => {
    return {
      title: product?.title,
    };
  });
};

const onlyNameProduct: Partial<ProductT>[] = getOnlyNameProduct(products);

export { onlyNameProduct };
