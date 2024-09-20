import { BsCart3 } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <NavLink to="/">
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJqImglqGVZf2D5eBjriit-bEr2EW0eVybHQ&s" />
          </div>
        </NavLink>
        <div>
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div>
              <BsCart3 />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
