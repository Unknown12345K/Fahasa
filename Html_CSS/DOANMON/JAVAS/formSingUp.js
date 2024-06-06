
// console.log();
// validation----->
const checkEmail = (email)=>{
    if (email.length === 0) {
        return "*Hãy nhập email! ";
    }
   
};
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
const checkRePass = (repass,pass)=>{
    if (!repass) {
        return "*Hãy nhập mật khẩu!";
       } 
    else if(repass !== pass ) {  
        return "*Nhập lại mật khẩu không đúng!";
    }
    

}
const showError = (element,message)=> {
    element.style.display = "block";
    element.innerHTML = message;
    element.className = "message-error"
}
const hideError = (element)=> {
    element.style.display = "none";
}



var form = document.querySelector(".form_up")

  var btnSubmit =  document.querySelector("#submit");
  console.log(form)
  btnSubmit.onclick = (btn)=>{
    // console.log(messageErrorEmail)
    let username = form.name.value;
    let pass =  form.password.value;
    let repass = form.repassword.value;
    let email = form.email.value;
    let messageErrorEmail  = checkEmail(email);
    const ErrorEmail = document.getElementById("errorEmail")
    const ErrorUsername = document.getElementById("errorUsername")
    const ErrorPass = document.getElementById("errorPass")
    const ErrorRePass = document.getElementById("errorRePass")
    
    console.log(messageErrorEmail)
    if (typeof messageErrorEmail ==="string") {
      btn.preventDefault();
      showError(ErrorEmail,messageErrorEmail)
  }else hideError(ErrorEmail)
  
//   validation username
  let messageErrorUsername  = checkUsername(username);
  console.log(messageErrorUsername)
  if (typeof messageErrorUsername ==="string") {
    btn.preventDefault();
    showError(ErrorUsername,messageErrorUsername)
  }else hideError(ErrorUsername)

//   validation PAss
  let messageErrorPass  = checkPass(pass);
  console.log(messageErrorPass)
  if (typeof messageErrorPass ==="string") {
    btn.preventDefault();
    showError(ErrorPass,messageErrorPass)
  }else hideError(ErrorPass)
  
//   validation Repass
  let messageErrorRePass  = checkRePass(repass,pass);
  console.log(messageErrorRePass)
  if (typeof messageErrorRePass ==="string") {
    btn.preventDefault();
    showError(ErrorRePass,messageErrorRePass);
  }else hideError(ErrorRePass)

}
