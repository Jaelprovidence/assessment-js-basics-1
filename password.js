const password = "girl1"
var checkNumber = /[0-9]/g;
var isPassword = false

for(let i = 0; i < password.length; i++){
    if(password.length >= 10) {
        if(password.charAt(i).match(checkNumber)){
            isPassword = true
        }
    }
}

if(isPassword === true){
    console.log("password meets requirement!")
} else{
    console.log("password does not meet requirement")
}

