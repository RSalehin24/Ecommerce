import React from 'react';
import CartProducts from './CartProducts';
import { useStateValue } from '../../StateProvider/StateProvider';
import { v4 as uuidv4 } from 'uuid';

const CartProductsList = () => {
  const [state, dispatch] = useStateValue();

  return (
    <div className='cartProducts'>
      {state.cart.map((product) => (
        <CartProducts
          key={uuidv4()}
          id={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default CartProductsList;
