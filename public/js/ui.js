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
                    "color": "#c25265",
                    "font-weight": "250"
                })
            } else if(ui.value>=34 && ui.value<=66){
                rating.css({
                    "color": "#e9e63e",
                    "font-weight": "400"
                })
            } else if(ui.value>=67){
                rating.css({
                    "color": "#7de93ee3",
                    "font-weight": "550"
                })
            }
        }
    });

    rating.val(slider.slider("value"));
}

init();