function dynamic() {
    const ListLien= document.querySelectorAll(".menu a");
    
    ListLien.forEach(a=>{
        a.addEventListener("mouseover", ()=>{
            a.style.textDecoration= " underline ";
            a.style.color="#ffffff"
            a.style.fontWeight= "bold";
        });
           
    });  

    const listBouton= document.querySelectorAll("button");
    listBouton.forEach(button =>{
       
            button.addEventListener("mouseover", ()=>{
                button.style.opacity="100%";
            
            });
            button.addEventListener("mouseleave", ()=>{
                button.style.opacity="40%";
            
            });
        
           
      
    });
    //icon hover
       const listiconHead= document.querySelectorAll(".icon-header img");
       listiconHead.forEach(img=>{
            img.addEventListener("mouseover", ()=>{
                img.style.filter = "invert(15%) sepia(0%) saturate(3562%) hue-rotate(2deg) brightness(100%) contrast(100%)";

            });
       });  
    /*button hover*/
    let confirm= document.getElementById("conf");
   
                confirm.addEventListener("mouseover", ()=>{
                    confirm.style.opacity="100%";
                
                });
                confirm.addEventListener("mouseleave", ()=>{
                    confirm.style.opacity="40%";
                
                });
           
         
}
function voirClick(){
    document.querySelector('.batman-cine').scrollIntoView();
}
function advClick(){
    document.querySelector('.nemesis').scrollIntoView();
}




dynamic();