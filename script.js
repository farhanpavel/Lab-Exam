// Assuming you have an image URL you want to insert
const imageUrl = './images/Group1.png';

(function() {
    const button = document.querySelector('.shesh .btn');

    button.addEventListener('click', function() {
        // Create a new image element
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;

        // Append the image element to the body or any specific element on your page
        document.body.appendChild(imgElement); // You can change document.body to any other parent element where you want to append the image
    });
})();
