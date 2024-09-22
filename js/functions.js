const div = document.querySelector('#dice')
const imageElement = document.querySelector('img')

div.addEventListener('click', () => {
    const randomized_number = Math.floor(Math.random() * 6) + 1
    imageElement.src = './kuvat/' + randomized_number + '.png'
    
})