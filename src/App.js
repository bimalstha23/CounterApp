import './App.css';
import React, { useState } from 'react';
import { Button } from './components/Button.jsx'
function App() {
  const [count, setCount] = useState(0)
  const countValue = [1, 2, 3, 5, 10, 100, -1, -2, -5, -10, -100];
  return (
    <div className='App'>
      <h1>{count}</h1>
      {/* increase count */}
      {/* <Button count={count} counter={1} setCount={setCount} />
      <Button count={count} counter={2} setCount={setCount} />
      <Button count={count} counter={5} setCount={setCount} />
      <Button count={count} counter={10} setCount={setCount} />
      <Button count={count} counter={100} setCount={setCount} />
      {/* decrease count */}
      {/* <Button count={count} counter={-1} setCount={setCount} />
      <Button count={count} counter={-2} setCount={setCount} />
      <Button count={count} counter={-5} setCount={setCount} />
      <Button count={count} counter={-10} setCount={setCount} />
      <Button count={count} counter={-100} setCount={setCount} /> */}
      <div className='btn'>

        {
          countValue.map((value) => (
            <Button count={count} counter={value} setCount={setCount} />

          ))
        }
      </div>

    </div>
  );
}

export default App;
