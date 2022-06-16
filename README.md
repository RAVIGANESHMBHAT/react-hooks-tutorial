# React Hooks

#### Hooks are a new feature addition in React version 16.8 which allow us to use React features without having to write a class.

#### Note: Hooks don't work inside classes.

## Why Hooks?
* Hooks avoid confusion with 'this' keyword
* Allows to reuse stateful logic without changing component hierarchy
* Organize the logic inside a component into reusable isolated units.

### Rules to use hooks
* Only call Hooks at the top level
* Don't call hooks inside conditions, loops or nested functions
* Only call hooks from React function (Not with regular JavaScript functions)

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
