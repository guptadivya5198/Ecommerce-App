import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/Slices/cartSlice';

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success('Item Added to Cart');
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error('Item Remove from Cart');
  };

  return (
    <div
      className="flex flex-col items-center justify-between gap-3 p-4 mt-10 ml-5 rounded-xl hover:scale-105 transition duration-300 ease-in
    shadow-[0px_2px_10px_5px_#fffaf0,inset_0px_3px_8px_0px_#00000024,0px_3px_8px_0px_#00000024]"
    >
      <div>
        <p className="text-slate-700 font-semibold text-lg text-left truncate w-40 mt-1">
          {post.title}
        </p>
      </div>
      <div>
        <p className="w-40 text-slate-500 font-normal text-[12px] text-left">
          {post.description.split(' ').slice(0, 10).join(' ') + '...'}
        </p>
      </div>
      <div className="h-[180px]">
        <img src={post.image} alt=" Not Found" className="w-full h-full" />
      </div>
      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <div>
          <p className="text-green-600 font-semibold">${post.price}</p>
        </div>
        {cart.some((p) => p.id === post.id) ? (
          <button
            className="border-2 border-gray-700 rounded-full text-gray-600 font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
            onClick={removeFromCart}
          >
            Remove Item
          </button>
        ) : (
          <button
            className="border-2 border-gray-700 rounded-full text-gray-600 font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
            onClick={addToCart}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
