import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div>
      {cart.length > 0 ? (
        <div className="flex flex-row mr-200  mt-14">
          <div>
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>
          <div className="flex flex-col fixed ml-[52rem]  mt-12">
            <div>
              <div className="text-green-600 ml-36 text-xl uppercase font-semibold">
                Your Cart
              </div>
              <div className="text-green-600 ml-36 text-3xl uppercase font-bold">
                Summary
              </div>
              <p className="mt-2">
                <span className="text-gray-800 ml-36 text-lg uppercase font-semibold">
                  Total Item : {cart.length}
                </span>
              </p>
            </div>
          </div>
          <div className="mt-[465px]   overflow-y-auto fixed bottom-4 ml-[72rem] transform -translate-x-1/2 ">
            <p className="text-gray-800  ml-6  uppercase font-semibold">
              Total Amount :<span className="font-bold"> ${totalAmount}</span>
            </p>
            <button className="text-white text-lg rounded-md p-1 w-80 mt-2 border-2 bg-green-700">
              Checkout Now
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center mt-20 flex-col">
          <h1>Your cart is empty</h1>
          <NavLink to={'/'}>
            <button className="text-white text-lg rounded-md p-1 w-80 mt-2 border-2 bg-green-700">
              {' '}
              Shop Now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
