import { BsCart3 } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  return (
    <div>
      <nav className="flex justify-between items-center h-20 mx-auto max-w-6xl">
        <NavLink to="/">
          <div className="ml-5">
            <img src="../logo (2).png" className="h-16" alt="Error" />
          </div>
        </NavLink>
        <div className=" flex items-center font-lg text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div className="relative">
              <BsCart3 className="text-3xl" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex items-center justify-center animate-bounce rounded-full text-white">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
