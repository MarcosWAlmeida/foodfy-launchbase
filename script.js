const modalOverlay = document.querySelector('.modal_overlay');

const pics = document.querySelectorAll('.receitas')


for (let pic of pics) {
    pic.addEventListener("click", function(){
        const imgId= pic.getAttribute("id")
        const title = pic.querySelector(".recipe_title").innerHTML
        const author = pic.querySelector(".recipe_author").innerHTML
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("img").src = (`/assets/${imgId}`)
        modalOverlay.querySelector('.modal_title').innerHTML = `${title}`
        modalOverlay.querySelector('.modal_author').innerHTML = `${author}`
    })
}

document.querySelector('.close-modal').addEventListener("click",function(){
        modalOverlay.classList.remove('active');
})

