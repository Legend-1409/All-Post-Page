let likeButton = document.querySelectorAll('.media-right .like-button');

likeButton.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.toggle('is-liked');
    });
})