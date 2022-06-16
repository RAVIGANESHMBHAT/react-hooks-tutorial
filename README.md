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

## useEffect hook

#### It is a close replacement (in Functional components) for the class component lifecycle methods such as componentDidMount, componentDidUpdate and componentWillUnmount
#### useEffect takse first parameter as a function to execute and the second parameter is an array to mention the parameters to keep track of so that change in value of that parameter will execute the useEffect function.