const loadData=()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(responsive=>responsive.json())
    .then(data => console.log(data))
};
/* fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json)) */
const loadUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayUser(data))
};
const loadImages=()=>{
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response=> response.json())
    .then(data=>console.log(data))
}
function displayUser(data){
    console.log(data)
}