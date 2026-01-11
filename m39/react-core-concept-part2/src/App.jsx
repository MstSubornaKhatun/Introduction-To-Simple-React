
// import './App.css'

// function App() {
  
//   function handleClick(){
//     alert('I am clicked')
//   }

//   const handleClick3 = () => {
//     alert('clicked 3')
//   }


//   const handleAdd5 = (num) => {
//     const newNum = num + 5;
//     alert(newNum);
//   }

//   return (
//     <>
     
//       <h1>Vite + React</h1>


//       {/* <button onclick="handleClick()"></button> */}
//       <button onClick={handleClick}>Click Me</button>

//       <button onClick={function handleClick2(){
//         alert('clicked 2')
//       }}>Click Me2</button>

//       <button onClick={handleClick3}>Click Me3</button>

//       <button onClick={()=>alert('click4')}>Click Me4</button>

//       <button onClick={() => handleAdd5(7)}>Click Add 5</button>


     
//     </>
//   )
// }

// export default App


// 3

// import './App.css'
// import Counter from './Counter';

// function App() {
  
  

//   return (
//     <>
     
//       <h1>Vite + React</h1>
//       <Counter></Counter>



     
//     </>
//   )
// }

// export default App

// 39-4 Understand the concept of useState and react hooks

// import './App.css'
// import Batsman from './Batsman';


// function App() {
  
  

//   return (
//     <>
     
//       <h1>Vite + React</h1>
//       <Batsman></Batsman>



     
//     </>
//   )
// }

// export default App


//39-5 (Advanced) Understand the concept of use


// import './App.css'
// import User from './Users'

// function App() {
  
  

//   return (
//     <>
     
//       <h1>Vite + React</h1>
//       <User></User>
      



     
//     </>
//   )
// }

// export default App

// 39-6 Load dynamic data, API call using use

import { Suspense } from 'react'
import './App.css'
import Users from './Users'
import Friends from './Friends'

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())

const fetchFriends = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

function App() {
  const friendsPromise = fetchFriends();

  
  

  return (
    <>
     
      <h1>Vite + React</h1>
      <Suspense fallback={<h3>Loading.....</h3>}>
          <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

      <Suspense fallback={<h3>Friends are coming for treat</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>







      
      



     
    </>
  )
}

export default App
