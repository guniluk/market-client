import { useState } from 'react';

const Child = (props) => {
  const name = props.man.name;
  const age = props.man.age;
  const myFunc = () => 'Hello from Child component';
  const [count, setCount] = useState(0);
  return (
    <>
      <div>{myFunc()}</div>
      <div>My name is {name}</div>
      <div>My age is {age}</div>
      <button value={count} onClick={() => setCount(count + 1)}>
        Click Me
      </button>{' '}
      <br></br>
      <label>Count: {count} </label>
    </>
  );
};

export default Child;
