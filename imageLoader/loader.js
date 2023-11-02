let inputImage = document.getElementById('input-image')
let imagePreview = document.getElementById('image-preview')
let uploadImageBtn = document.getElementById('upload')
let clearBtn = document.getElementById('clear-btn')

inputImage.addEventListener('change', function() {
    const file = inputImage.files[0]
    const reader = new FileReader()
    reader.onload = function (e) {
        imagePreview.src = e.target.result
    }
    reader.readAsDataURL(file)
})

uploadImageBtn.addEventListener('click', function() {
    const imageData = imagePreview.src

    localStorage.setItem('uploadedImage', imageData)
})

clearBtn.addEventListener('click', function() {
    imagePreview.src = ''
    localStorage.removeItem('uploadedImage')
})

const storedImage = localStorage.getItem('uploadedImage')

if (storedImage) {
    imagePreview.src = storedImage
}

