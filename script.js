const switchElement = document.querySelector(".switch");

switchElement.addEventListener("click", () => {
    document.body.classList.toggle("dark");
})


// email js

function validate() {
    let name = document.querySelector('.name')
    let email = document.querySelector('.email')
    let msg = document.querySelector('.message')
    let sendBtn = document.querySelector('.send-btn')

     
    sendBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (name.value == "" || email.value == "" || msg.value == ""){
            emptyerror();
        } else {
            sendmail (name.value, email.value, msg.value);
            success();
        }
    
    });
}
validate();


function sendmail(name,email,msg){
    emailjs.send("service_wuobhu7","template_smz01nt",{
        from_name: email,
        to_name: name,
        message: msg,
        });
        
}

function emptyerror(){
    swal({
        title: "Oh No....",
        text: "fields cannot be empty!",
        icon: "error",
        button: "OK",
      });
}



function success(){
    swal({
        title: "Email sent successfully",
        text: "I will try to reply in 24 hours",
        icon: "success",
        button:"success",
      });
}

