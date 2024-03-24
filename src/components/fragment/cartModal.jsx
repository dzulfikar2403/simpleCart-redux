import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import CardCart from "../element/cardCart";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../../redux/reducers/modalSlice";
import { totalAmount } from "../../redux/reducers/productSlice";

const CartModal = () => {
  const dispatch = useDispatch();
  const { cart, total } = useSelector((state) => state.productSlice);

  useEffect(() => {
    dispatch(totalAmount());
  }, [cart]);
  return (
    <div className="absolute w-full h-[100vw]   bg-black bg-opacity-50">
      <div className="bg-slate-200 rounded-md fixed top-[50%] left-[50%] w-2/3 -translate-x-[50%] -translate-y-[50%] border-slate-500">
        <button className="absolute -top-2 -right-2 rounded-xl bg-slate-300 p-1 " onClick={() => dispatch(setOpen())}>
          <IoClose />
        </button>
        <div className="px-8">
          {cart.map((el) => (
            <CardCart data={el} key={el.id} />
          ))}
          <hr className=" border border-slate-300" />
          <div className="text-lg flex px-4 justify-between">
            <h5 className=" font-medium">Total :</h5>
            <p>${total.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
