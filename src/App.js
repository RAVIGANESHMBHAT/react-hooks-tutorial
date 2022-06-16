import React from "react";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import ComponentC from "./components/ComponentC";
import CounterOne from "./components/CounterOne";
import DataFetching from "./components/DataFetching";
import HookCounter from "./components/HookCounter";
import HookCounterFour from "./components/HookCounterFour";
import HookCounterOne from "./components/HookCounterOne";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterTwo from "./components/HookCounterTwo";
import HookMouse from "./components/HookMouse";
import IntervalHookCounter from "./components/IntervalHookCounter";
import MouseContainer from "./components/MouseContainer";

const UserContext = React.createContext();
const ChannelContext = React.createContext();

function App() {
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
      <CounterOne />
    </div>
  );
}

export default App;
export { UserContext, ChannelContext };
