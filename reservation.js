function validate(){
    const name=document.getElementById("name").value
    const email=document.getElementById("email").value
    const indate=document.getElementById("indate").value
    const outdate=document.getElementById("outdate").value
    const rooms=document.getElementById("rooms").value
    const blank=document.getElementById("blank").value

    if(name.length<4){
        alert("Name must be at least 4 characters long")
    }else if(!email.endsWith("@gmail.com")&&!email.endsWith("@outlook.com")&&!email.endsWith("@yahoo.com")&&!email.endsWith("@iCloud.com")){
        alert("Please enter a proper email")
    }else if(indate==0){
        alert("Please enter your check-in date")
    }else if(outdate==0){
        alert("Please enter your check-out date")
    }else if(rooms==blank){
        alert("Please select a room type")
    }else{
        alert("Thank you for reserving. We'll contact you later. Please wait for further information.")
        window.location.href="reservation.html"
    }
}