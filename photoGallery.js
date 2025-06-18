// 1. Declare a variable name 'imageContainer' and store the html element with the id 'imageContainer'
//  - Using querySelector, store the selector #imageContainer
let imageContainer = document.createElement("div")
imageContainer.id = "imageContainer"
document.body.appendChild(imageContainer)

// 2. Add at least four image urls to the imageUrls array
let imageUrls = [
    "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=",
    "https://www.naturepl.com/blog/wp-content/uploads/2025/04/1756582-2400x1800.jpg",
    "https://michiganross.umich.edu/sites/default/files/images/news-story/butterfly.jpeg",
    "https://media.istockphoto.com/id/483724081/photo/yosemite-valley-landscape-and-river-california.jpg?s=612x612&w=0&k=20&c=QQ7rvq0Qbfpkug1Wbd36PGqkOntoPFKWxiE4w4tV-NE="
];

// 3. Selecting the imageUrls array, create a forEach loop.
imageUrls.forEach((image_i,i) => {
    let image = document.createElement("img");
    image.src = image_i;
    imageContainer.appendChild(image);
});

// In side the body of the loop:
//  - Create an image element and store it in a variable named 'image'
//  - Update the src of the image element to equal the function parameter (the array element)
//  - Append the image to the image container.
