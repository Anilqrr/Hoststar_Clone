let nav = document.getElementsByTagName('nav')[0]
let p = document.querySelectorAll('.text')

// console.log(p)
nav.addEventListener('mouseover',()=>{
    // nav.style.transition =" 0.5s ease in out";
     for(let i in p)
     {
        p[i].style.display="block"
        p[i].addEventListener('mouseover',()=>{
            p[i].style.color ="white";
            p[i].style.transform= "translate(1px, 1px)";
            p[i].style.transition= "0.2s ease in out";
        })
        p[i].addEventListener('mouseout',()=>{
            p[i].style.transition= "0.2s ease in out";
            p[i].style.transform= "translate(0px, 0px)";
            p[i].style.color ="gray"
        })
     }
})
nav.addEventListener('mouseout',()=>{
    nav.style.transition =" 0.5s ease in out";
        for(let i in p)
        {
            p[i].style.display="none"
        }
     
})

const scrollBar = document.querySelectorAll(".ms")
const scrollBar2 = document.querySelectorAll(".s")
const scrollBar3 = document.querySelectorAll(".m")
for(let i of scrollBar){
    i.addEventListener('wheel',(e)=>{
          e.preventDefault();
          i.scrollLeft += e.deltaY
    })
}
for(let i of scrollBar2){
    i.addEventListener('wheel',(e)=>{
          e.preventDefault();
          i.scrollLeft += e.deltaY
    })  
}
for(let i of scrollBar3){
    i.addEventListener('wheel',(e)=>{
          e.preventDefault();
          i.scrollLeft += e.deltaY
    })  
}