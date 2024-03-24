import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../../redux/reducers/productSlice";

const CardCart = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between items-center py-2">
      <p className="w-48">#{data.id}</p>
      <img src={data.image} alt="imgAlt" className="w-16 h-14 object-cover object-center" />
      <span className="w-60 text-center">{data.name}</span>
      <div className="flex gap-3 items-center">
        <button
          onClick={() => {
            dispatch(decrement(data.id));
          }}
        >
          <IoIosArrowBack />
        </button>
        <p>{data.amount}</p>
        <button
          onClick={() => {
            dispatch(increment(data.id));
          }}
        >
          <IoIosArrowForward />
        </button>
      </div>
      <p>${data.price}</p>
    </div>
  );
};

export default CardCart;
