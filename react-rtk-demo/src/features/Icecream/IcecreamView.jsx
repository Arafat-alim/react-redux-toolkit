import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

function IcecreamView() {
  const [value, setValue] = React.useState(0);
  const noOfIceCream = useSelector((state) => state.icecream.noOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>No. of IceCream - {noOfIceCream}</h3>
      <button onClick={() => dispatch(ordered())}>Order Ice Cream</button>
      <br />
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <br />
      <button onClick={() => dispatch(restocked(value))}>
        Restock IceCream
      </button>
    </div>
  );
}

export default IcecreamView;
