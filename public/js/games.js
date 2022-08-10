const general= document.querySelector("main");
const modal= document.querySelector('.reviewModal');
const blurr= document.querySelector('.blurDiv');
const ratingInput= document.querySelector('#rating');
const notesInput= document.querySelector('#notes');

let currentGame, currentRating;


const modalToggle= async (sw) =>{
    if(sw){
        modal.style.display= 'block';
        blurr.style.display='block';
    } else{
        modal.style.display= 'none';
        blurr.style.display='none';
        ratingInput.value= '';
        notesInput.value='';
        currentGame='';
        currentRating= '';
    }
}

const addReviewHandler= async () =>{
    const rating= parseInt(ratingInput.value.trim());
    const mod= currentRating + Math.round(rating/25)-2;
    const notes= notesInput.value.trim();
    
    const response= await axios.post(`/api/reviews/${currentGame}/add`, {
            rating: rating,
            content: notes
    })
    .then((res)=>{ return res})
    .catch((err)=> {
        alert(err)
        modalToggle(false);
    });
    
    if(response.status==200){
        alert("Review successfully added.");
        ratingUpdate(mod);
        modalToggle(false);
    }
        
}

const ratingUpdate= async (rating) =>{
    console.log(rating);
    const response= await axios.put(`api/games/rating/${currentGame}`,{
        newRating: rating
    })
    .then((res)=>{return res})
    .catch((err)=> console.error(err));

    if(response.status==200) return;
}

const addPlayHandler= async (id) =>{
    const response= await axios.post(`/api/playlist/${id}/add`)
    .then((res)=>{ return res})
    .catch((err)=> alert("Something went wrong :("));

    if(response.status==200) alert("Game successfully added.");
}

const deleteRevHandler= async (id) =>{
    const response= await axios.post(`/api/reviews/${id}/delete`, {

    });
}

general.addEventListener("click", (event) =>{
    if(event.target.id==="addPBtn"){
        event.preventDefault();
        addPlayHandler(event.target.dataset.id);
    }
    if(event.target.id=="addRBtn"){
        event.preventDefault();
        currentGame=event.target.dataset.id;
        currentRating= event.target.dataset.rating;
        modalToggle(true);
    }
    if(event.target.id=="reviewSubmit"){
        event.preventDefault();
        addReviewHandler(currentGame);
    }
    if(event.target.id=="exitBtn"){
        event.preventDefault();
        modalToggle(false);
    }
})