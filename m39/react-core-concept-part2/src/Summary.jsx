/*
1. API: url: https://jsonplaceholder.typicode.com/users



fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => console.log(data))


const loadData = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = res.json();
    return data; 
}



*/ 
/*
1. event tigger
2 .state
3. data load from API
4. loop through to display
5. why we use key props

*/