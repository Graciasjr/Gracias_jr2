/*  ABOUT JS CODE */

const scroll1 = document.getElementById("scroll1");
const scroll2 = document.getElementById("scroll2");
const leftPanel = document.getElementById("lp");
const rightPanel = document.getElementById('rp');
const about = document.getElementById('about');

/*  MY SERVICES JS CODE */

const leftBtn = document.getElementById('scroll-left');
const rightBtn = document.getElementById('scroll-right');
const serviceContainer = document.querySelector('.services-container');
const serviceList = document.querySelector('.service-list');

let currentScrollPosition = 0;
let scrollAmount = 310;
let maxScroll =  document.querySelector('.services-container').offsetWidth - document.querySelector('.service-list').offsetWidth  ;
     
const ServiceScroller = (value) =>{    
    currentScrollPosition = currentScrollPosition + (value*scrollAmount);    
   if(currentScrollPosition > 0){
        currentScrollPosition   =   0;
   }

   if(currentScrollPosition < maxScroll){
        currentScrollPosition=maxScroll
   }
    console.log(currentScrollPosition);
    serviceList.style.left = currentScrollPosition+"px";  
}


const AboutScaleToogle = ()=>{
    scroll2.classList.toggle("scale");
    scroll1.classList.toggle("scale");
}

const AboutLeftScroll = ()=>{
    leftPanel.classList.add('left');
    rightPanel.classList.add('lp');
}

const AboutRightScroll = ()=>{
    leftPanel.classList.remove('left');
    rightPanel.classList.remove('lp')
}


scroll1.addEventListener('click',async()=>{
    if(!scroll1.classList.contains("scale")){
       AboutScaleToogle();
       AboutRightScroll();
    }    
})

scroll2.addEventListener('click',async()=>{
    if(!scroll2.classList.contains("scale")){
        AboutScaleToogle();
        AboutLeftScroll();

    }
})

















let aboutObserver;

// const rPObserver = new IntersectionObserver((entries)=>{

// })


    // rPObserver = new IntersectionObserver((entries)=>{
        
    //         setTimeout(()=>{
    //         if(entries[0].isIntersecting === true){
    //                 scaleToogle();
    //                 leftPanel.style.transform="translateX(-150%)";
    //                 rightPanel.style.transform="translateX(0%)";
    //             }
    //             stopObserve();
    //         },2000);
        
    // })

    // rPObserver.observe(rightPanel)  


    // aboutObserver = new IntersectionObserver((entries)=>{
        
    //         if(entries[0].isIntersecting===true){
    //         }else{
    //             leftPanel.style.transform="translateX(0%)";
    //             rightPanel.style.transform="translateX(150%)";
    //         }
    //     })

        
// }


// aboutObserver.observe(about)


// function stopObserve(){
//     rPObserver.disconnect();
// }