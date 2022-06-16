# React Hooks

#### Hooks are a new feature addition in React version 16.8 which allow us to use React features without having to write a class.

#### Note: Hooks don't work inside classes.

## Why Hooks?

- Hooks avoid confusion with 'this' keyword
- Allows to reuse stateful logic without changing component hierarchy
- Organize the logic inside a component into reusable isolated units.

### Rules to use hooks

- Only call Hooks at the top level
- Don't call hooks inside conditions, loops or nested functions
- Only call hooks from React function (Not with regular JavaScript functions)

### Using an object as a state variable in useState hook

#### In clas component, the this.state merges the attributes. Only the modified attribute will be updated and all other attributes in the object would be stayed unchanged. But in useState hook, only the passed attribute in setState() will be changed and other attributes will be lost. So, use spread operator to pass all the remaining attributes into setState method.

## useEffect Hook

#### It is a close replacement (in Functional components) for the class component lifecycle methods such as componentDidMount, componentDidUpdate and componentWillUnmount

#### useEffect takse first parameter as a function to execute and the second parameter is an array to mention the parameters to keep track of so that change in value of that parameter will execute the useEffect function.

#### To execute the useEffect only once (mimic of componentDidMount in Class component), we need to pass an empty array as second parameter

### Mimic the componentWillUnmount in Functional Component

#### In the current Commit example, even if the Component was destroyed, the mousemove event was still attached. To remove that event do, the first parameter passed to useEffect is a function and it will return another function which will be executed when the component gets unmounted.

### useEffect with incorrect dependency

#### It the current commit, we had a dependency 'count' in the useEffect. But we couldn't recognize that as a dependency because, we are not using the 'count' directly inside useEffect rather it is a dependency for our tick function. So, each time when we call some function inside useEffect, make sure to use all the dependent parameters of that functions inside the depeendency array of useEffect.

### Fetching data with useEffect

## useContext Hook

#### Context provides a way to pass data through the component tree without having to pass props down manually at every level.

#### Note: See the creating of context in Class Component in this [repo](https://github.com/RAVIGANESHMBHAT/ReactJS-Learnings)

## useReducer Hook

#### A hook used for state management. It is an alternative to useState. The useState is built by using useReducer.

| reduce in JavaScript                        | useReduce in React                                        |
| ------------------------------------------- | --------------------------------------------------------- |
| array.reduce(reducer, initialValue)         | useReducer(reducer, initialState)                         |
| singleValue=reducer(accumulator, itemValue) | newState=reducer(currentState, action)                    |
| reduce method returns a single value        | useReducer returns a pair of values. [newState, dispatch] |

#### Simple way for using useReducer is, the useReducer takes 2 parameters. One is the reducer function and the other one is initial state. The reducer function takes two parameters, the current state and the action and it returns the new state. The useReducer hook returns the state property( in current commit, it is 'count') and the dispatcher. We can use the dispatcher with appropriate actions as parameter to do the tasks.

#### Current commit has complex example of using useReducer. Using action as an object, we will be able to pass additional data to the reducer function. Using state as an object, we are able to keep multiple state variables.

### Multiple useReducers

#### --

## useReducer with useContext

#### local state management -> useReducer | global state management -> useReducer + useContext

### Fetching data with useReducer Hook

#### ---

## useState vs useReducer

| Scenario                    | useState                | useReducer                                    |
| --------------------------- | ----------------------- | --------------------------------------------- |
| Type of state               | Number, String, Boolean | Object or Array                               |
| Number of state transitions | One or two              | Too many                                      |
| Related state transitions?  | No                      | Yes (use it if state transitions are related) |
| Business logic              | No business logic       | Complex business logic                        |
| Local vs Global             | Local                   | Global                                        |

## useCallback Hook

#### useCallback is a hook that will return a memoized version of the callback function that only changes if one of the dependencies has changed.

#### In the current commit, when we used the 'export default Function_Name' instead of 'export default React.memo(Function_Name)', all the components were getting rendered even if any one button was pressed.Using the React.memo prevented unnecessary rendering up to certain level. But still if 'Increment Age' button was pressed, it was rendering the Increment Salary button along with the 'Age' Count component and 'Increment Age' Button component. It was because, whenever 'age' property has changed in the ParentComponent.js component, the ParentComponent function was rerendered along with creating new references for the existing functions inside that function component(eg: incrementAge(), incrementSalary()). Since rerendering of child components happen after the shallow comparision, when compared the old incrementSalary() function with the new incrementSalary() function, it's reference was different . so, it rerendered the 'Increment Salary' button component as well.(Since the 'salary' attribut value was not changed, it didn't rerender the dependent component, 'Count' of salary).

### Solution for the above problem is to use useCallback hook.

## useMemo Hook

#### The current commit is before introducing the useMemo hook for the optimization. In current code, the isEven() is a computationally heavt function. When 'Count One' button is pressed, it takes some time to update the result. Even if the isEven() is not added into Count Two button, it also gets lagged when 'Count Two' button is pressed. It is because of rerendering of the Counter component.
#### useCallback caches the provided function instance itself , but useMemo invokes the provided function and caches it's result. if we want to cache a function, then use useCallback. if we want to cache the result, then use useMemo.
