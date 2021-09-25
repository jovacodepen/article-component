let shareBtn = document.querySelector('.avatar-share');
let shareBar = document.querySelector('.share-bar')

shareBtn.addEventListener('click', (e) => {
    shareBar.style.opacity = 1;
    console.log("clicked")
})

document.addEventListener('click', (e) => {
    if (e.target !== shareBtn) {
        shareBar.style.opacity = 0;
    }
})
