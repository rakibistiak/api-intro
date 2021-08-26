function loadAlbum(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response=>response.json())
    .then(data => displayAlbum(data))
}
function displayAlbum(albums){
    const albumContainer=document.getElementById('album-container');
    for(const album of albums){
        const div = document.createElement('div');
        div.innerHTML=`<h4>Id No : ${album.id}</h4>
        <p> <span style="color:blue"> <b>Title :</b> </span> ${album.title} </p>
        `;
        albumContainer.appendChild(div);
        div.classList.add('album')
    }
}
loadAlbum();