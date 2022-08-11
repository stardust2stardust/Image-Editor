
const newImageBtn = document.getElementById('new-image-btn')
newImageBtn.addEventListener('click', getImage)

function imageInfo (data) {
    console.log(data)
    const imageObj = {}
    imageObj.imgURL = data.urls.small;
    imageObj.photographerName = data.user.name;
    imageObj.photograperLink = data.links.self
    imageObj.unpslashLink = 'https://unsplash.com/';
    displayImage(imageObj)
    return imageObj
}

function displayImage(obj) {
   
    console.log(obj)
    const imgContainer = document.querySelector('.img-container')
    const image = document.createElement('img');
    image.classList.add('img');
    image.src = obj.imgURL
    imgContainer.appendChild(image)
}

function getImage () {
    const client_id = '8_R28_vR62gV7KKgNX4LzUQ3myYfMb6GkH0N2yDCpXo'
    fetch(`https://api.unsplash.com/photos/random/?client_id=${client_id}`, {mode: 'cors'})
    .then(response => response.json())
    .then(imageInfo)
  
}


