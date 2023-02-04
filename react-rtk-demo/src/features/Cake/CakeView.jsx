import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

function CakeView() {
  const noOfCake = useSelector((state) => state.cake.noOfCake);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>No. of Cakes - {noOfCake}</h3>
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      <button onClick={() => dispatch(restocked(10))}>Restock Cake</button>
    </div>
  );
}

export default CakeView;
