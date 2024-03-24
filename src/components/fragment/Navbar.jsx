import React from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../../redux/reducers/modalSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const {cart} = useSelector(state => state.productSlice);
  return (
    <div className="w-full flex bg-purple-300 justify-between items-center h-10 px-4 fixed z-10 ">
      <NavLink to={"/"}>
        <h1 className="text-lg font-medium">bljr createAsyncThunk</h1>
      </NavLink>
        <div className="relative">
          <div className="absolute -top-2 right-1 bg-white rounded-full text-sm w-5 text-center">{cart.length < 1 ? false : cart.length}</div>
          <button className="px-4 " onClick={()=> dispatch(setOpen())}>
            <FiShoppingCart className="h-5 w-5" />
          </button>
        </div>
    </div>
  );
};

export default Navbar;
