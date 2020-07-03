const modalOverlay = document.querySelector('.modal_overlay');

const pics = document.querySelectorAll('.receitas')

for (let pic of pics) {
    pic.addEventListener("click", function(){
        modalOverlay.classList.add('active')
    })
}

document.querySelector('.close-modal').addEventListener("click",function(){
        modalOverlay.classList.remove('active');
})