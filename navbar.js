const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');

const colours = ['#3399FF', '#FF3399', '#60FF07'];

const options = {
    threshold: 0.7
}

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
    entries.forEach(entry => {
        const divName = entry.target.id
        const activeAnchor = document.querySelector(`[data-page=${divName}]`)
        const colourIndex = entry.target.getAttribute('data-index')
        const coords = activeAnchor.getBoundingClientRect();

        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left
        }

        if (entry.isIntersecting) {
            bubble.style.setProperty('left', `${directions.left}px`)
            bubble.style.setProperty('top', `${directions.top}px`)
            bubble.style.setProperty('height', `${directions.height}px`)
            bubble.style.setProperty('width', `${directions.width}px`)

            bubble.style.setProperty('background', `${colours[colourIndex]}`)
        }
    })
}

sections.forEach(section => {
    observer.observe(section)
})