// DOM elements
const newImageBtn = document.getElementById('new-image-btn');
const brightnessBtn = document.getElementById('brightness');
const saturateBtn = document.getElementById('saturate');
const borderBtn = document.getElementById('border');

function testImage () {
    const imgContainer = document.querySelector('.img-container')
    imgContainer.innerHTML = "";
    const image = document.createElement('img');
    image.classList.add('img');
    image.src = "./images/photo-1658302640117-da5e9d9836cc.jpeg"
    imgContainer.appendChild(image)
}

// function imageInfo (data) {
//     console.log(data)
//     const imageObj = {}
//     imageObj.imgURL = data.urls.small;
//     imageObj.photographerName = data.user.name;
//     imageObj.photograperLink = data.links.html;
//     imageObj.unpslashLink = 'https://unsplash.com/';
//     displayImage(imageObj)
//     displayInfo(imageObj)
//     return imageObj
// }

// function displayImage(obj) {
//     const imgContainer = document.querySelector('.img-container')
//     imgContainer.innerHTML = "";
//     const image = document.createElement('img');
//     image.classList.add('img');
//     image.src = obj.imgURL
//     imgContainer.appendChild(image)
// }

// function displayInfo(obj) {
//     const imgContainer = document.querySelector('.img-container');
//     const imageInfoDiv = document.createElement('div');
//     imageInfoDiv.innerHTML = `Photo by <a href="${obj.photograperLink}">${obj.photographerName}</a> on <a href="${obj.unpslashLink}">Unsplash</a>`
//     imgContainer.appendChild(imageInfoDiv)
// }

// function getImage () {
//     const client_id = '8_R28_vR62gV7KKgNX4LzUQ3myYfMb6GkH0N2yDCpXo'
//     fetch(`https://api.unsplash.com/photos/random/?client_id=${client_id}&w=400&h=300&`, {mode: 'cors'})
//     .then(response => response.json())
//     .then(imageInfo)
  
// }

function applyBrightness () {
    const image = document.querySelector('.img');
    const brightnessLevel = brightnessBtn.value 
    image.style.filter = `brightness(${brightnessLevel}%)`
 
}

function applySaturation () {
    const image = document.querySelector('.img');
    const saturateLevel = saturateBtn.value 
    image.style.filter = `saturate(${saturateLevel}%)`
}

function applyBorder () {
    const image = document.querySelector('.img');
    const borderLevel = borderBtn.value;
    image.style.border = `${borderLevel}px solid black`;
}

newImageBtn.addEventListener('click', testImage)
// newImageBtn.addEventListener('click', getImage)
brightnessBtn.addEventListener('change', applyBrightness)
saturateBtn.addEventListener('change', applySaturation)
borderBtn.addEventListener('change', applyBorder)
