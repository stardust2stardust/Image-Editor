// API KEY for PEXELS API:
// Your API key: 563492ad6f917000010000013ffa5ca7846d48cfb03089f201d56f13



const newImageBtn = document.getElementById('new-image-btn')
newImageBtn.addEventListener('click', getImage)

function imageInfo (data) {
    console.log(data);
    return data
}

function createImageObj (data) {
    console.log(data)
    // console.log(data.urls)
    imageObj = {}
    imageObj.url = data.urls.small
    // imageObj.title = data[0].alt
    // imageObj.photographer = data[0].photographer
    // imageObj.src = data[0].src
    // console.log(imageObj)
    return imageObj
}

function displayImage(imageObj) {
    console.log(imageObj)
    const imgContainer = document.querySelector('.img-container')
    const image = document.createElement('img');
    image.classList.add('img');
    image.src = imageObj.url
    imgContainer.appendChild(image)
}

function getImage () {
    fetch('https://api.unsplash.com/photos/random/?client_id=8_R28_vR62gV7KKgNX4LzUQ3myYfMb6GkH0N2yDCpXo', {mode: 'cors'})
    .then(response => response.json())
    .then(imageInfo)
    .then(createImageObj)
    .then(displayImage)
}


