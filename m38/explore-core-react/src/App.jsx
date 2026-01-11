
// import './App.css'

// function App() {
 

//   return (
//     <>

//       <h1>Vite + React</h1>
//       <Pet/>
//       <Sports/>
//       <Person></Person>
//       <Person></Person>
//       <Person></Person>
//       <Sports/>
      
//     </>
//   )
// }

// function Person(){
//   const age = 17;
//   const name = "Faha";
//   return (
//     <p>I am a person name, {name} {age}</p>
//   )
// }


// function Sports(){
//   return(
//     <div>
//       <h3>Cricket</h3>
//       <ul>
//         <li>Hanna</li>
//         <li>Hajan</li>
//       </ul>
//       <p>Playing and losing</p>
//     </div>
//   )
// }
// function Pet(){
//   return(
//     <p>cat</p>
//   )
// }

// export default App

//2

// import './App.css'

// function App() {
 

//   return (
//     <>

//       <h1>React Core Concepts</h1>
//       <Student></Student>
//       <Student></Student>
//       <Person/>
//       <Developer name="Faha"></Developer>
//       <Developer name="Raha"></Developer>
//       <Developer name="Maha"></Developer>
      
      
//     </>
//   )
// }


// function Developer(props){
//   console.log(props)
//   return(
//     <div style={{
//       border: '2px solid green',
//       borderRadius: '20px'
//     }}>
//       <h3>Developer: {props.name} </h3>
//       <p>technology: </p>
//     </div>
//   )
// }

// function Person(){
//   const age = 17;
//   const name = "Faha";


//   const personStyle = {
//     color: 'red',
//     textAlign: 'right'
//   }

//   return (
//     <p style={personStyle}>I am a person name, {name} {age}</p>
//   )
// }


// function Student(){
//   return(
//     <div className='student'>
//       <p>Name: </p>
//       <p>Dept: </p>
//     </div>
//   )
// }


// export default App

// 3

// import './App.css'

// function App() {
 

//   return (
//     <>

//       <h1>React Core Concepts</h1>
    
//       <Player name="tamim" runs="5000"></Player>
//       <Player name="mushi" runs="3000"></Player>
//       <Salami event="Rojar Eid" amount="20"></Salami>
//       <Salami event="Graduation"></Salami>
      
      
//     </>
//   )
// }

// function Salami({event, amount = 0}){
//   return(
//     <div className='student'>
//       <p>Salami For: {event}</p>
//       <p>Amount {amount}</p>
//     </div>
//   )
// }



// function Player({name, runs}){
//   return(
//     <div className='student'>
//       <h3>Name: {name}</h3>
//       <p>Runs: {runs}</p>
//     </div>
//   )
// }


// export default App


// 6

// import './App.css'
// import ToDo from './ToDo';

// function App() {
//   const time = 50;
 

//   return (
//     <>

//       <h1>React Core Concepts</h1>
//       <ToDo task="Learn React" isDone={true} time={time}></ToDo>
//       <ToDo task="Revise JS" isDone={false}></ToDo>
//       <ToDo task="Take a shower" isDone={true} time="100"></ToDo>
      
      
      
      
//     </>
//   )
// }

// export default App


// 7

// import './App.css'
// import ToDo from './ToDo';

// function App() {
//   const time = 50;
 

//   return (
//     <>

//       <h1>React Core Concepts</h1>
//       <ToDo task="Learn React" isDone={true} time={time}></ToDo>
//       <ToDo task="Revise JS" isDone={false}></ToDo>
//       <ToDo task="Take a shower" isDone={true} time="100"></ToDo>
      
      
      
      
//     </>
//   )
// }

// export default App


// 8

// import './App.css'
// import Actor from './Actor';
// import Singer from './Singer';


// function App() {
//   const actors = ['Maha', 'Faha', 'Raha', 'Enna', 'Mina'];

//   const singers = [
//     {id: 1, name: 'Dr. Mahfuz', age: 68},
//     {id: 2, name: 'Tahsan', age: 45},
//     {id: 3, name: 'Shuvro Deb', age: 57},
//   ]
 

//   return (
//     <>

//       <h1>React Core Concepts</h1>

//       {
//         singers.map(singer => <Singer key={singer.id} singer={singer}></Singer>)
//       }
      
//       {
//         actors.map(actor => <Actor actor={actor}></Actor>) 
//       }
      
      
      
//     </>
//   )
// }

// export default App


// 9

import './App.css'
import Library from './Library';


function App() {
  const books = [
    {id: 1, name: 'Physics', price: 250},
    {id: 2, name: 'Chemistry', price: 350},
    {id: 3, name: 'Math', price: 255},
    {id: 4, name: 'Biology', price: 298},
  ]
 
  return (
    <>

      <h1>React Core Concepts</h1>
      <Library books={books}></Library>

      
      
    </>
  )
}

export default App


