

import './App.css'
import {add,diff, mult, divide as divi} from './Utils/Math/math'

function App() {
  const sum = add(2,4);
  const subs = diff(2,4);
  const multiply = mult(2,3);
  const division= divi(4/2);
  console.log(sum,subs,multiply,division);
  

  return (
    <>
    
    </>
  )
}

export default App
