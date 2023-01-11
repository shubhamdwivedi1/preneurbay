
let scrollEvent = (event)=>{

    if(event.deltaY > 0){
        // slide down
        console.log("Moved Down")
        let swiper = document.getElementById("swiper-container").swiper
        swiper.slideNext(1500);
    }
    else{
        // slide up
        console.log("Moved Up")
        let swiper = document.getElementById("swiper-container").swiper
        swiper.slidePrev(1500);
    }
}

export const addEvent = ()=>{
    // let swiper = document.getElementById("swiper-container").swiper
    // if(swiper.isBeginning){
        // document.body.scroll({})
    // }
    window.addEventListener("wheel", scrollEvent)

    console.log("added")
}



export const removeEvent = ()=>{
    window.removeEventListener("wheel", scrollEvent)
    console.log("removed")
}