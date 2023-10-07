
const modeToggle = document.getElementById('modeToggle');
const body = document.body;
modeToggle.addEventListener('click', toggleMode);
function toggleMode() {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
       
    } else {
        body.classList.add('dark-mode');
        
    }
}


    function validateForm() {
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const phoneInput = document.getElementById("phone");
        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const phoneError = document.getElementById("phoneError");
      
        
    if (nameInput.value.trim() === "") {
        nameError.innerHTML = "Name is required.";
        nameInput.classList.add("is-invalid");
        return false;
    }
    
    else {
        nameError.innerHTML = "";
        nameInput.classList.remove("is-invalid");
     
    }

    if (emailInput.value.trim() === "") {
        emailError.innerHTML = "Email is required.";
        emailInput.classList.add("is-invalid");
        return false;
    } else {
        emailError.innerHTML = "";
        emailInput.classList.remove("is-invalid");
      
    }
    if(phoneInput.value.trim()=== ""){
        phoneError.innerHTML ='Phone Number is required'
        phoneInput.classList.add("is-invalid")
        return false;

    }
    else{
        phoneError.innerHTML = "";
        phoneInput.classList.remove("is-invalid")
        
    
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                
            });
        
    }
}

       

   

    //

    







   




