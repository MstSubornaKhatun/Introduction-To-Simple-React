const handleAddToStorage = () => {
    const name = document.getElementById("name").value;
    // const email = document.getElementById("email").value;
    const id = document.getElementById("id").value;

    // localStorage.setItem(name, email)

    const data = {id, name}
    console.log(data) // {id: '32', name: 'namim'}

    // localStorage.setItem(id, data) // value object object

    // solution
    localStorage.setItem(id, JSON.stringify(data)) // 	{"id":"323","name":"nafi"}
}

const storedItem = localStorage.getItem("434");
console.log(JSON.parse(storedItem))


const handleClear = () => {
    localStorage.clear()
}
