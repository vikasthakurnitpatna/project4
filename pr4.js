const mn=document.querySelector(".number");
 let count=0;
const btns=document.querySelectorAll(".btn");
btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        let classlists = e.currentTarget.classList
        if(classlists.contains("decrease")){
              count--;
            }
        else if(classlists.contains("increase")){
                count++;    
            }
        else{
            count=0;
        }
            mn.textContent=count;
    
    })
})
