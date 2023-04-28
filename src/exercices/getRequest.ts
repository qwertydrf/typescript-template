import axios from 'axios';

const URL = 'https://dummyjson.com/products';

const getProducts = async () => {
  try {
    const response = await axios.get(URL);

    console.log({ response: response?.data?.products?.[0] });
  } catch (e: unknown) {
    console.log({ e });
  }
};

export { getProducts };
