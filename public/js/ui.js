const slider= $("#slider-range-min");
const rating= $("#rating");

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
}

init();