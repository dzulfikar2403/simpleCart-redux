import React from "react";
import { useDispatch } from "react-redux";
import { getProductsById } from "../../redux/reducers/productSlice";

const Card = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-48 h-72 rounded-xl overflow-hidden relative bg-white shadow-md ">
      <img src={data.image} alt="img" className="w-full h-32 object-cover" />
      <div className="px-4 py-2  ">
        <h4 className="py-1 text-purple-500 text-lg font-semibold">{data.name}</h4>
        <div className="w-full flex absolute bottom-3 justify-around">
          <p className=" text-teal-700">${data.price}</p>
          <button className=" px-4 py-1 rounded-full bg-yellow-300"  onClick={()=> dispatch(getProductsById(data.id))}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
