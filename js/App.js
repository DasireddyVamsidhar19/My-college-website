//Instead of writing JS code globally, writting it in seperate function is
//best practise

//1.for hamburger clicked
function starter(){

const hamburger=document.querySelector(".hamburger")
const sidebarCloseButton=document.querySelector(".close-button")
const sidebarContainer=document.querySelector(".sidebar-container")


const openSidebar=()=>{
    sidebarContainer.classList.add("show-sidebar")
}

const closeSidebar=()=>{
    sidebarContainer.classList.remove("show-sidebar")
    
}

hamburger.addEventListener("click",openSidebar)

sidebarCloseButton.addEventListener("click",closeSidebar)
}
starter()//calling the starter function for executing the functionalities




//2.for sticky navbar
function stickyNavStarter(){
    const navContainer=document.querySelector(".nav-container")
//when browser window is scrolled then 
window.addEventListener("scroll",function(){
    const scrollNumber=window.scrollY//because, we scroll vertical right!
    //we use "innerWidth" for knowing the size of browser window
    //when innerWidth>=992px(tab,desktop screens,etc) then change the 
    //"targetNumber" to "70px", else to "50px for mobiles"
    const targetNumber=this.window.innerWidth >=992 ? 70 : 50

    //if we reached the complete navbar height(70px for bigger screens and 50px
    //for smaller screens)
    //means when the navbar is completely hidden while scrolling up then make it
    //sticky by adding "sticky-nav class" to "nav-container class"
    if(scrollNumber>=targetNumber){
        navContainer.classList.add("sticky-nav")
    }

    //if navbar is not hidden(initially when user opens website add that time remove 
    //the sticky nav)
    else{
        navContainer.classList.remove("sticky-nav")
    }

})
}
stickyNavStarter()

//for changing the copyright year dynamically
function copyRight(){
    const currentYear=new Date().getFullYear()
    const copyRightYear=document.querySelector(".copyright-date")
    copyRightYear.textContent=currentYear+1
}
copyRight()