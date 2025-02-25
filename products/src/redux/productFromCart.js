import axios from 'axios';

export default async function getProductFromCart(cart) {
  let { data: products } = await axios.get('https://fakestoreapi.com/products');

  let cartProducts = cart.products.map((cartItem) => {
    let matchingProduct = products.find(
      (product) => product.id === cartItem.productId
    );

    if (matchingProduct) {
      return { ...matchingProduct, quantity: cartItem.quantity };
    }
  });

  return cartProducts;
  console.log(cartProducts);
}
