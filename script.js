const form=document.getElementById("myForm");
        form.addEventListener("submit",(e)=>{
            e.preventDefault();

            const name=document.getElementById("name").value.trim();
            const email=document.getElementById("email").value.trim();
            const phone=document.getElementById("phone").value.trim();
            const password=document.getElementById("password").value.trim();
            const confirmpassword=document.getElementById("confirmpassword").value.trim();

            if(name=="")
            {
                alert("Name is Required");
                return;
            }
           
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (!emailPattern.test(email))
    {
        alert("Please enter a valid email address");
        return;
    }

    const phonePattern = /^[0-9]{10}$/; 
    if (!phonePattern.test(phone))
    {
        alert("Please Enter a valid 10-digit phone number");
        return;
    }

    if (password === "")
    {
        alert("Password is required");
        return;
    }

    if (password.length<8)
    {
        alert("Password must be alteast 8 characters");
        return;
    }

    if (confirmpassword === "")
    {
        alert("Confirm password is required");
        return;
    }
    
    if (password !== confirmpassword)
    {
        alert("Password do not match");
        return;
    }
    else
    {
        alert("Form Submitted Successfully");
        return;
    }

          form.submit();
          
        });