const onglets = document.querySelectorAll('.onglets');
const contenue = document.querySelectorAll('.contenue');
let index = 0;
onglets.forEach(onglet => {
    onglet.addEventListener('click', () => {
        if(onglet.classList.contains('active')){
            return;
        }else{
            onglet.classList.add('active');
        }
        index = onglet.getAttribute('data-anim');       
        for(i = 0; i < onglets.length; i++){
            if(onglets[i].getAttribute('data-anim') != index){
                onglets[i].classList.remove('active');
            }
        }
        for(j = 0; j < contenue.length; j++){
            if(contenue[j].getAttribute('data-anim') == index){
                contenue[j].classList.add('activeContenue');
            }else{
                contenue[j].classList.remove('activeContenue');
            }
        }
    })
});
let menu = document.querySelector('.menu');
let ham = document.querySelector('.ham');
let xIcon = document.querySelector('.xIcon');
let menuIcon = document.querySelector('.menuIcon');
ham.addEventListener('click', toggleMenu)
function toggleMenu(){
    if(menu.classList.contains('showMenu')){
        menu.classList.remove('showMenu');
        xIcon.style.display = 'none';
        menuIcon.style.display = 'block';
    }else{
        menu.classList.add('showMenu');
        xIcon.style.display = 'block';
        menuIcon.style.display = 'none';
    }
}
let menuLinks = document.querySelector('.menuLink');
menuLinks.forEach(function(menuLink){
    menuLink.addEventListener('click', toggleMenu)
})