const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//Buttons

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

//counter

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX('+ (-size * counter)+'px)';


//Button Listeners

nextBtn.addEventListener("click",()=>{
    if(counter>=carouselImages.length-1)return;
    counter++;
    carouselSlide.style.transition = 'transform 2s ease'
    carouselSlide.style.transform = 'translateX('+ (-size * counter)+'px)';
})
prevBtn.addEventListener("click",()=>{
    if(counter<=0)return;
    counter--;
    carouselSlide.style.transition = 'transform 2s ease'
    carouselSlide.style.transform = 'translateX('+ (-size * counter)+'px)';
})


carouselSlide.addEventListener("transitionend",()=>{
   if(carouselImages[counter].id==='lastClone'){
    carouselSlide.style.transition = 'none';
    counter = carouselImages.length-2;
    carouselSlide.style.transform = 'translateX('+ (-size * counter)+'px)';
   }

   if(carouselImages[counter].id==='firstClone'){
    carouselSlide.style.transition = 'none';
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = 'translateX('+ (-size * counter)+'px)';
   }
})
//https://s3-us-west-2.amazonaws.com/udacity-printer/production/certificates/1193ccc8-a09c-47ba-8c25-f0108142aaa7.pdf