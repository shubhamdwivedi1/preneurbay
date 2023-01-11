
let scroll = 0


let scrollEvent = (event)=>{
    if(event.deltaY > 0){
        scroll += event.deltaY

        // slide down
        console.log("Moved Down")
        let swiper = document.getElementById("swiper-container").swiper
        if(!swiper.isEnd){
            let x = window.scrollX
            let y = window.scrollY
            window.scrollTo(x, y)
        }
        if(scroll > 450){
            scroll = 0
            swiper.slideNext();
        }
    }
    else{
        scroll += event.deltaY

        // slide up
        console.log("Moved Up")
        let swiper = document.getElementById("swiper-container").swiper
        if(!swiper.isBeginning){
            let x = window.scrollX
            let y = window.scrollY
            window.scrollTo(x, y)
        }
        if(scroll < -450){
            scroll = 0
            swiper.slidePrev();
        }
    }
}

export const addEvent = ()=>{
    window.addEventListener("wheel", scrollEvent)

    console.log("added")
}



export const removeEvent = ()=>{
    window.removeEventListener("wheel", scrollEvent)
    console.log("removed")
}