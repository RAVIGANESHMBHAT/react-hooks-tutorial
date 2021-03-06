import React, { useReducer } from "react";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import ClassTimer from "./components/ClassTimer";
import ComponentC from "./components/ComponentC";
import ComponentD from "./components/ComponentD";
import ComponentE from "./components/ComponentE";
import ComponentF from "./components/ComponentF";
import Counter from "./components/Counter";
import CounterOne from "./components/CounterOne";
import CounterThree from "./components/CounterThree";
import CounterTwo from "./components/CounterTwo";
import DataFetching from "./components/DataFetching";
import DataFetchingOne from "./components/DataFetchingOne";
import DataFetchingTwo from "./components/DataFetchingTwo";
import FocusInput from "./components/FocusInput";
import HookCounter from "./components/HookCounter";
import HookCounterFour from "./components/HookCounterFour";
import HookCounterOne from "./components/HookCounterOne";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterTwo from "./components/HookCounterTwo";
import HookMouse from "./components/HookMouse";
import HookTimer from "./components/HookTimer";
import IntervalHookCounter from "./components/IntervalHookCounter";
import MouseContainer from "./components/MouseContainer";
import ParentComponent from "./components/ParentComponent";

const UserContext = React.createContext();
const ChannelContext = React.createContext();

export const CountContext = React.createContext();

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <HookCounterOne /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalHookCounter /> */}
      {/* <DataFetching /> */}
      {/* <UserContext.Provider value="Ravi">
        <ChannelContext.Provider value="My Channel">
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}
      {/* <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        Count in App = {count}
        <ComponentD />
        <ComponentE />
        <ComponentF />
      </CountContext.Provider> */}

      {/* <DataFetchingOne /> */}
      {/* <DataFetchingTwo /> */}

      {/* <ParentComponent /> */}

      {/* <Counter /> */}

      <FocusInput />
      <ClassTimer />
      <HookTimer />
    </div>
  );
}

export default App;
export { UserContext, ChannelContext };
