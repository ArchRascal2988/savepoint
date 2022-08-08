const general= document.querySelector("main");
const modal= document.querySelector('.reviewModal');
const blurr= document.querySelector('.blurDiv');

let currentGame;


const modalToggle= async (id, sw) =>{
    if(sw){
        modal.style.display= 'block';
        blurr.style.display='block';
    } else{
        modal.style.display= 'none';
        blurr.style.display='none';
    }
}

const addReviewHandler= (event, id) =>{
    let gId= event.target.dataset.id;
    const response= axios.post(`/api/reviews/${id}/add`, {
            gameId: gId
    }).then((res)=>{ return res});
    if(response.status==200) alert("Review successfully added.");
}

const addPlayHandler= (id) =>{
    const response= axios.post(`/api/playlist/${id}/add`).then((res)=>{ return res}).catch((err)=> alert("Something went wrong :("));
    if(response.status==200) alert("Game successfully added.");
}

const deleteRevHandler= (event, id) =>{
    const response= axios.post(`/api/reviews/${id}/delete`, {

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
        modalToggle(true);
    }
    if(event.target.id=="reviewSubmit"){
        event.preventDefault();
        currentGame='';
        modalToggle(false);
        addReviewHandler(currentGame);
    }
})