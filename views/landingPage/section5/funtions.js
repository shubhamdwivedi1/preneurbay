
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
            document.getElementsByTagName("html")[0].scrollTo(x, y)
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
            document.getElementsByTagName("html")[0].scrollTo(x, y)
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
        if(tab == 3){
            setTimeout(()=>{document.getElementsByTagName("html")[0].style.overflowY = 'scroll'}, 1000)
        }
        if(tab != 3){
            document.getElementsByTagName("html")[0].style.overflowY = 'hidden'
            let x = window.scrollX
            let y = window.scrollY
            if(anscroll < 250)
                window.scrollTo(x, y)
            if(anscroll > 250){

                if(tab == 1){
                    document.getElementById("whypre").style.marginTop='410px'
                    window.scrollTo(x, y+430)
                }
                else if(tab == 2){
                    document.getElementById("whypre").style.marginTop='590px'
                    window.scrollTo(x, y+200)
                }
                tab++;
                anscroll = 0
            }
        }
        
    }
    else{
        anscroll += event.deltaY
        if(tab == 1){
            setTimeout(()=>{document.getElementsByTagName("html")[0].style.overflowY = 'scroll'}, 1000)
        }
        if(tab != 1){
            document.getElementsByTagName("html")[0].style.overflowY = 'hidden'
            let x = window.scrollX
            let y = window.scrollY
            if(anscroll > -250)
                window.scrollTo(x, y)
            if(anscroll < -250){

                if(tab == 3){
                    document.getElementById("whypre").style.marginTop='410px'
                    window.scrollTo(x, y-200)
                }
                else if(tab == 2){
                    document.getElementById("whypre").style.marginTop='0px'
                    window.scrollTo(x, y-430)
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