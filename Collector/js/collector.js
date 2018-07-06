var laserModule = (function(){
    "use strict"
   
    function laserMouseClickHandler(event){
        if(event.currentTarget.classList.contains("hovered")){
            event.currentTarget.classList.remove("hovered");
        }else{
            event.currentTarget.classList.add("hovered");
        }
        
    }
    
    return {
        laserMouseClickHandler : laserMouseClickHandler
    };
}());