import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../redux/features/counter/counterSlice";
import { useNavigate } from "react-router-dom";
import { ResponeRestaurant } from "../api/hooks/use-restaurant";
import ToogleTheme from "../ToogleTheme";
function Try() {
  const navigate = useNavigate();
  const restaurantNe = ResponeRestaurant();

  const count = useSelector(
    (state: { counter: { value: number } }) => state.counter.value
  );
  const dispatch = useDispatch();

  return (
    <div>
      <ToogleTheme />
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <br />
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <br />

      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>
    </div>
  );
}

export default Try;
