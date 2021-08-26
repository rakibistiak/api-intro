function loadImages(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => displayImages(data))
};
function displayImages(images){
    const imageContainer = document.getElementById('image-container');
    for(const image of images){
        /* const img = document.createElement('img');
        img.setAttribute('src',image.url);
        imageContainer.appendChild(img); */
        const div = document.createElement('div')
        div.innerHTML=`<img src=${image.url} alt="Image">`
        imageContainer.appendChild(div);
        imageContainer.classList.add('img-style');
    }
}
loadImages();