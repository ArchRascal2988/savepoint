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
        }
    });

    rating.val(slider.slider("value"));
}

init();