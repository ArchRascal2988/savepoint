const loginSubmit=document.querySelector('#loginBtn');
const signupSubmit=document.querySelector('#signupBtn');


const loginFormHandler = async (event) => {
  event.preventDefault();

  const uEmail= document.querySelector('#typeEmailX').value.trim();
  const uPass= document.querySelector('#typePasswordX').value.trim();
  

  if (uEmail && uPass) {
    const response = await axios.post('/api/user/login', {
      email: uEmail,
      password: uPass
    })
    .then((res)=>{ 
        return res;
    })
    .catch((err)=> alert("Username or password is incorrect."));

    if (response.status==200){
      window.location.replace('/home');
    } else{
      alert("Something went wrong :(")
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const uName = document.querySelector('#typeUserX').value.trim();
  const uEmail = document.querySelector('#typeEmailX').value.trim();
  const uPass = document.querySelector('#typePasswordX').value.trim();

  if (uName && uEmail && uPass) {
    const response = await axios.post('/api/user/signup', {
      username: uName,
      email: uEmail,
      password: uPass
    })
    .then((res)=>{ 
        return res;
    })
    .catch((err)=> alert("Password must be at least eight characters."));

    if (response.status==200){
      window.location.replace('/home');
    } else{
      alert("Something went wrong :(")
    }
  }
};

if(loginSubmit!=null){
  loginSubmit.addEventListener('click', loginFormHandler);
}
if(signupSubmit!=null){
  signupSubmit.addEventListener('click', signupFormHandler);
}



