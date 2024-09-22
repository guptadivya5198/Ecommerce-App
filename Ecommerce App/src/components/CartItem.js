import toast from 'react-hot-toast';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/cartSlice';

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error('Item Removed');
  };
  return (
    <div className="flex items-center ml-[260px] mt-2 justify-center w-[630px]  border-2  border-gray-400">
      <div className="ml-[30px] flex flex-row">
        <div>
          <img
            src={item.image}
            alt="error"
            className="h-[140px] w-[120px] mr-8 mb-5 hover:scale-110 transition duration-300 ease-in"
          />
        </div>
        <div className="flex flex-col  ">
          <h1 className="text-slate-700 font-semibold text-lg text-left truncate w-40 mt-6">
            {item.title.split(' ').join(' ') + '...'}
          </h1>
          <h1 className="w-40 text-slate-700 font-normal mt-1 text-[12px]  text-left">
            {item.description.split(' ').slice(0, 10).join(' ') + '...'}
          </h1>
          <div className="flex flex-row justify-between mt-2">
            <p className="text-green-600 font-semibold">${item.price}</p>
            <div className="text-2xl" onClick={removeFromCart}>
              <RiDeleteBin5Fill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
