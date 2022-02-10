import { useSelector, useDispatch } from "react-redux";
import {
  decrement100,
  decrement200,
  decrement500,
  decrement1000,
  increment100,
  increment200,
  increment500,
  increment1000,
  reset,
} from "../redux/counterSlice";
const Counter = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);
  if ({ count }.count <= 0) {
    dispatch(reset());
  }

  return (
    <div>
      {{ count }.count > 0 ? (
        <h2>{count}KR</h2>
      ) : (
        <p>You don't have money for withdrawal</p>
      )}
      <p>Withdraw</p>
      <button
        onClick={() => {
          dispatch(decrement100());
        }}
      >
        100kr
      </button>
      <button
        onClick={() => {
          dispatch(decrement200());
        }}
      >
        200kr
      </button>
      <button
        onClick={() => {
          dispatch(decrement500());
        }}
      >
        500kr
      </button>
      <button
        onClick={() => {
          dispatch(decrement1000());
        }}
      >
        1000kr
      </button>
      <br />
      <br />
      <p>Deposit</p>
      <button
        onClick={() => {
          dispatch(increment100());
        }}
      >
        100kr
      </button>
      <button
        onClick={() => {
          dispatch(increment200());
        }}
      >
        200kr
      </button>
      <button
        onClick={() => {
          dispatch(increment500());
        }}
      >
        500kr
      </button>
      <button
        onClick={() => {
          dispatch(increment1000());
        }}
      >
        1000kr
      </button>
    </div>
  );
};
export default Counter;
