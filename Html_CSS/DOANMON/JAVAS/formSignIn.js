
const checkUsername = (username)=>{
    if (username.length == 0) {
        return "*Hãy nhập Tên! "
    }
    
    
   
};
const checkPass = (pass)=>{
    if (!pass) {
        return "*Hãy nhập mật khẩu!";
       } 
   
};

const showError = (element,message)=> {
    element.style.display = "block";
    element.innerHTML = message;
    element.className = "message-error"
}
const hideError = (element)=> {
    element.style.display = "none";
}
var form = document.querySelector(".form_sign")
var btnSubmit =  document.querySelector("#submit");
console.log(form)
btnSubmit.onclick = (btn)=>{
    let username = form.name.value;
    let pass =  form.password.value;
    const ErrorUsername = document.getElementById("errorUsername")
    const ErrorPass = document.getElementById("errorPass")
      //   validation username
    let messageErrorUsername  = checkUsername(username);
    console.log(messageErrorUsername)
    if (typeof messageErrorUsername ==="string") {
        btn.preventDefault();
      showError(ErrorUsername,messageErrorUsername)
    }
    else hideError(ErrorUsername)
  //   validation PAss
    let messageErrorPass  = checkPass(pass);
    console.log(messageErrorPass)
    if (typeof messageErrorPass ==="string") {
        btn.preventDefault();
      showError(ErrorPass,messageErrorPass)
    }
    else hideError(ErrorPass)
}
