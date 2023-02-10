const header = document.getElementById('header');
const sections = document.querySelectorAll('[data-section]')

const onIntersect = (entries) => {
    entries.forEach((entry) => {
        // console.log('window.scrollY', window.scrollY)
        window.scrollY > 0
            ? header.classList.add('-sticky')
            : header.classList.remove('-sticky')
    })
}

const observer = new IntersectionObserver(onIntersect, {
    threshold: 1
})

sections.forEach((section) => {
    observer.observe(section)
})