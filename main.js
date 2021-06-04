//navbar
const navbarButton=document.getElementsByClassName("navbar__button")[0];
const navbarOptions=document.getElementsByClassName("navbar__options__list")[0];
const navbarUser=document.getElementsByClassName("navbar__user__list")[0];

navbarButton.addEventListener("click", ()=>{
    navbarOptions.classList.toggle("active");
    navbarUser.classList.toggle("active");
})