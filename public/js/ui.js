const slider= $("#slider-range-min");
const rating= $("#rating");
const nxtBtn= document.querySelector('#nxtBtn');
const prevBtn= document.querySelector('#prevBtn');
const slides= document.getElementsByClassName("slides");

console.log(slides)

let currentSlide=1;

const init= ()=>{
    //I know slider slider is incredibly redundant i just think its funny 
    slider.slider({
        range: "min",
        value: 50,
        min: 0,
        max: 100,
        animate: "fast",
        slide: (event, ui)=>{
            rating.val(ui.value)
            if(ui.value<=33){
                rating.css({
                    "color": "#ff2d2d"
                })
            } else if(ui.value>=34 && ui.value<=66){
                rating.css({
                    "color": "#ffff00ee"
                })
            } else if(ui.value>=67){
                rating.css({
                    "color": "#00ff11cb"
                })
            }
        }
    });

    rating.val(slider.slider("value"));
    showSlides(currentSlide);
}

const showSlides= (index)=>{
    if (index > slides.length) {currentSlide = 1}
    if (index < 1) {currentSlide = slides.length}
    for (let i=0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[currentSlide-1].style.display = "block";
}

const changeSlides= (mod)=>{
    currentSlide+=mod;
    showSlides(currentSlide);
}

nxtBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    changeSlides(1);
});

prevBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    changeSlides(-1);
});

init();
