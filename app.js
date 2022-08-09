// API KEY for PEXELS API:
// Your API key: 563492ad6f917000010000013ffa5ca7846d48cfb03089f201d56f13


function imageInfo (data) {
    console.log(data.photos);
    return data.photos
}

function createImageObj (data) {
    console.log(data)
    console.log(data[0].url)
    imageObj = {}
    imageObj.url = data[0].url
    console.log(imageObj)
}

const newImage = fetch('https://api.pexels.com/v1/search?query=nature&per_page=1');
newImage
.then(response => response.json())
.then(imageInfo)
.then(createImageObj)

