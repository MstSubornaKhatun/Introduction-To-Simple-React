
import { useState } from 'react'
import './App.css'
import { add, diff, mult, divide as div } from './components/utils/math/math';

function App() {
  const [count, setCount] = useState(0)
  const sum = add(2, 4);
  const subs = diff(12, 8)
  const goonfol = mult(2, 3)
  const divide = 15/3;
  const something = div(25/5)



  console.log(sum, subs, goonfol, something)
 
  return (
    <>

      <h1>ES6</h1>
      

      


    </>
  )
}

export default App
