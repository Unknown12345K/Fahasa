
// console.log();
// validation----->
const checkEmail = (email)=>{
    if (email == 0) {
        return "*Hãy nhập email! "
    }
    else if (email.lenght() < 7 ){
        return "*Hãy nhập tối thiểu 7 ký tự! "
    }
    else return true;
};
const checkUsername = (username)=>{
    if (username == 0) {
        return "*Hãy nhập Tên! "
    }
    else if (username.lenght() < 7 ){
        return "*Hãy nhập tối thiểu 7 ký tự!  "
    }
    else return true;
};
const checkPass = (pass)=>{
    if (!pass) {
        return "*Hãy nhập mật khẩu!";
       } 
    else 
       {
        return true;
       }
};
const checkRePass = (repass,pass)=>{
    if (!repass) {
        return "*Hãy nhập mật khẩu!";
       } 
    else if(repass !== pass ) {  
        return "*Nhập lại mật khẩu không đúng!";
    }
    else {
        return true;
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


const validationsignin = (form) =>{
  let username = form.name.value;
  let pass =  form.password.value;
  const ErrorUsername = document.getElementById("errorUsername")
  const ErrorPass = document.getElementById("errorPass")
    //   validation username
  let messageErrorUsername  = checkUsername(username);
  console.log(messageErrorUsername)
  if (typeof messageErrorUsername ==="string") {
    showError(ErrorUsername,messageErrorUsername)
  }
  else hideError(ErrorUsername)
//   validation PAss
  let messageErrorPass  = checkPass(pass);
  console.log(messageErrorPass)
  if (typeof messageErrorPass ==="string") {
    showError(ErrorPass,messageErrorPass)
  }
  else hideError(ErrorPass)
}

// let btnclick =document.querySelector("#submit")
// btnclick.onclick = ()=> {
//     const form = document.querySelector(".form")
//     validation(form);
// }
const validation = (form) => {
    let email = form.email.value;
    let username = form.name.value;
    let pass =  form.password.value;
    let repass = form.repassword.value;
    const ErrorEmail = document.getElementById("errorEmail")
    const ErrorUsername = document.getElementById("errorUsername")
    const ErrorPass = document.getElementById("errorPass")
    const ErrorRePass = document.getElementById("errorRePass")
   console.log(username)
   console.log(repass)
   console.log(pass)
   //   validation email
  let messageErrorEmail  = checkEmail(email);
  console.log(messageErrorEmail)
  if (typeof messageErrorEmail ==="string") {
    showError(ErrorEmail,messageErrorEmail)
  }
  else hideError(ErrorEmail)    
//   validation username
  let messageErrorUsername  = checkUsername(username);
  console.log(messageErrorUsername)
  if (typeof messageErrorUsername ==="string") {
    showError(ErrorUsername,messageErrorUsername)
  }
  else hideError(ErrorUsername)
//   validation PAss
  let messageErrorPass  = checkPass(pass);
  console.log(messageErrorPass)
  if (typeof messageErrorPass ==="string") {
    showError(ErrorPass,messageErrorPass)
  }
  else hideError(ErrorPass)
//   validation Repass
  let messageErrorRePass  = checkRePass(repass,pass);
  console.log(messageErrorRePass)
  if (typeof messageErrorRePass ==="string") {
    showError(ErrorRePass,messageErrorRePass)
  }
  else hideError(ErrorRePass)
}