import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/reducers/productSlice";
import Card from "../components/fragment/Card";
import CartModal from "../components/fragment/cartModal";

const Home = () => {
  const dispatch = useDispatch();
  const { cards } = useSelector((state) => state.productSlice);
  const { isOpen } = useSelector((state) => state.modalSlice);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="grid grid-cols-3 gap-10 absolute top-10 py-16 ">
        {cards.map((el) => (
          <Card data={el} key={el.id} />
        ))}
      </div>
      {isOpen && <CartModal />}
    </div>
  );
};

export default Home;
