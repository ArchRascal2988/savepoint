const general= document.querySelector("main");

const updateHandler= async (id) =>{
    const response= await axios.put(`/api/playlist/${id}/`)
    .then((res)=>{ return res})
    .catch((err)=> alert(err));
    
    if(response.status==200) window.location.reload(true);
}

const deleteHandler= async (id) =>{
    const response= await axios.delete(`/api/playlist/${id}/delete`)
    .then((res)=>{ return res})
    .catch((err)=> alert(err));

    if(response.status==200) window.location.reload(true);
}

general.addEventListener('click',(event)=>{
    event.preventDefault();
    if(event.target.id=="completeToggle"){
        updateHandler(event.target.dataset.id);
    }
    if(event.target.id=="deleteBtn"){
        deleteHandler(event.target.dataset.id);
    }
});