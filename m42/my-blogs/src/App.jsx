
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'



function App() {
  const [bookmarked, setBookmarked] = useState([])

  const handleBookMark = (blog) => {
    setBookmarked([...bookmarked, blog])
  }
  console.log(bookmarked)
/*
jehetu function er modhe theke jetar bookmark te click korle setar sompurno data ta paachi tai akhn  state declate kore state er modhe rekhe dite pari.  


jehetu bookmark a click korle data gulo paschi. sehetu akhn map caliye sei data gulo right-container er modhe dekhabo

*/  
  return (
    <>
    <Navbar></Navbar>
    
    

    <div className="main-container text-center flex">
      <div className="left-container w-[70%]">
       
       <Blogs handleBookMark={handleBookMark}></Blogs>
      </div>
      <div className="right-container w-[30%]">
        <h1>Reading time: 0</h1>
        <h1>Bookmarked count: 0</h1>

        {
          bookmarked.map((marked)=><p>{marked.title}</p> )
        }
      </div>
    </div>
     
      
    </>
  )
}

export default App
