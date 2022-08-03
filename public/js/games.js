const general= document.querySelector("main");
const modal= document.querySelector('.reviewModal');
let currentGame;


const reviewHandler= async (id) =>{
    console.log('hi')
    console.log(modal)
    currentGame=id;
    modal.style.display= 'block'
}

const submitHandler= (event, id) =>{
    const gId= event.target.dataset.id;
    const response= axios.post(`/api/reviews/${id}/add`, {
            gameId: gId
    }).then((res)=>{ return res});
    if(response) alert("Game successfully added.");
}

const addPlayHandler= (id) =>{
    const response= axios.post(`/api/playlist/${id}/add`).then((res)=>{ return res}).catch((err)=> alert("Something went wrong :("));
    if(response) alert("Game successfully added.");
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
        reviewHandler(event.target.dataset.id);
    }
})