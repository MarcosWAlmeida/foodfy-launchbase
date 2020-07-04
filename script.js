const modalOverlay = document.querySelector('.modal_overlay');

const pics = document.querySelectorAll('.receitas')


for (let pic of pics) {
    pic.addEventListener("click", function(){
        const imgId= pic.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("img").src = (`/assets/${imgId}`)
    })
}

document.querySelector('.close-modal').addEventListener("click",function(){
        modalOverlay.classList.remove('active');
})

