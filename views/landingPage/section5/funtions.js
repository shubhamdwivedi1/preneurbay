
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

let anscroll = 0
let tab = 1

let stickyScroll = (event)=>{
    if(event.deltaY > 0){
        anscroll += event.deltaY
        
        if(tab != 3){
            let x = window.scrollX
            let y = window.scrollY
            if(anscroll < 450)
                window.scrollTo(x, y)
            if(anscroll > 450){

                if(tab == 1){
                    document.getElementById("whypre").style.marginTop='348px'
                    window.scrollTo(x, y+348)
                }
                else if(tab == 2){
                    document.getElementById("whypre").style.marginTop='564px'
                    window.scrollTo(x, y+216)
                }
                tab++;
                anscroll = 0
            }
        }
        
    }
    else{
        anscroll += event.deltaY
        if(tab != 1){
            let x = window.scrollX
            let y = window.scrollY
            if(anscroll > -450)
                window.scrollTo(x, y)
            if(anscroll < -450){

                if(tab == 3){
                    document.getElementById("whypre").style.marginTop='348px'
                    window.scrollTo(x, y-216)
                }
                else if(tab == 2){
                    document.getElementById("whypre").style.marginTop='0px'
                    window.scrollTo(x, y-348)
                }
                tab--;
                anscroll = 0
            }
        }   
    }
}

export const addEvent = ()=>{
    window.addEventListener("wheel", stickyScroll)

    console.log("added")
}



export const removeEvent = ()=>{
    window.removeEventListener("wheel", stickyScroll)
    console.log("removed")
}