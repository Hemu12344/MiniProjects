var typed = new Typed(".skill", {
    strings: ['UI/UX Designer', "App Developer", "Software Engineer","AI/ML Engineer"],
    typeSpeed: 50,
    backSpeed: 70,
    DelayNode:1000,
    looped:true
});
// light dark mode
let ele = document.querySelector(".mode")
let mode ="light"
let changeMode = ()=>{
    ele.addEventListener("click",(e)=>{
        if(mode=="dark"){
            document.body.style.backgroundColor="black"
            mode="light"
        }else{
            console.log("light");
            document.body.style.backgroundColor="white"
            mode="dark"
        }
    })
}
changeMode()
//togle button 
let show="show"
let menubtn =document.querySelector("#menubtn")
let links=document.querySelector(".links")
document.querySelector("#menubtn").addEventListener("click",(e)=>{
    if(show==="show"){
        menubtn.classList.remove("bi-list")
        menubtn.classList.add("bi-x-lg")
        links.classList.remove("links")
        links.classList.add("links2")
        show="hide"
    }else if(show=="hide"){
        menubtn.classList.remove("bi-x-lg")
        menubtn.classList.add("bi-list")
        links.classList.remove("links2")
        links.classList.add("links")
        show="show"
    }
})