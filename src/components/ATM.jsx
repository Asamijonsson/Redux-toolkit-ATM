import { useSelector, useDispatch } from "react-redux";
import { toggleAtm } from "../redux/atmSlice";
import Counter from "./Counter";

const ATM = () => {
  const { atm } = useSelector((state) => state.atm);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>REDUX @toolkit ATM</h2>
      <button onClick={() => dispatch(toggleAtm())}>Start ATM</button>
      <br />
      <br />
      {atm ? (
        <div>
          <h2>amount:</h2>
          <Counter />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default ATM;
