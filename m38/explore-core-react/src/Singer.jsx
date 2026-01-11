import './App.css'
export default function Singer({singer}){
    return(
        <div className='singer'>
            <h3>Name: {singer.name}</h3>
            <p>Age: {singer.age} </p>
        </div>
    )
}

/*
output: 
Name: Dr. Mahfuz
Age: 68

Name: Tahsan
Age: 45

Name: Shuvro Deb
Age: 57
*/ 