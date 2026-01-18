
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'



function App() {
  const [bookmarked, setBookmarked] = useState([])
  const [readingCount, setReadingCount] = useState(0)

  const handleBookMark = (blog) => {
    setBookmarked([...bookmarked, blog])
  }
  console.log(bookmarked)

// akhane handleMarkAsRead function er modhe id ta recive korlam
  const handleMarkAsRead = (time, id) => {
    const newTime = readingCount+time;
    setReadingCount(newTime)

    console.log(id)
    handleRemoveFromBookmark(id)

  }


const handleRemoveFromBookmark = (id) => {
  const remainingBookMark = bookmarked.filter((mark)=>mark.id !== id);
  console.log(remainingBookMark)
  setBookmarked(remainingBookMark)

}

  return (
    <>
    <Navbar></Navbar>
    
    

    <div className="main-container text-center flex">
      <div className="left-container w-[70%]">
       
       <Blogs handleBookMark={handleBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
      </div>
      <div className="right-container w-[30%]">
      <h1>Reading time: {readingCount}</h1>
        <h1>Bookmarked count: {bookmarked.length}</h1>

        {
          bookmarked.map((marked)=><p key={marked.id} className='bg-red-600 p-2 shadow m-2 text-white'>{marked.title}</p> )
        }
      </div>
    </div>
    </>
  )
}

export default App






