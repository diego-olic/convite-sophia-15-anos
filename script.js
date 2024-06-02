
function nextPage() {
    const firstPage = document.getElementById(`page1`)
    const secondPage = document.getElementById(`page2`)
    
    firstPage.classList.add('animate-out');
    
    setTimeout(() => {
        firstPage.classList.remove('show', 'animate-out')
        const frontPage = document.getElementById('front-page')
        frontPage.removeChild(firstPage)
        secondPage.classList.add('show', 'animate-in');
    }, 1000);
}

/*function prevPage() {
    const firstPage = document.getElementById(`page1`)
    const secondPage = document.getElementById(`page2`)
    
    secondPage.classList.add('animate-out');
    
    setTimeout(() => {
        secondPage.classList.remove('show', 'animate-out');
        firstPage.classList.add('show', 'animate-in');
    }, 1000);

}*/
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById(`page${currentPage}`).classList.add('show');
});