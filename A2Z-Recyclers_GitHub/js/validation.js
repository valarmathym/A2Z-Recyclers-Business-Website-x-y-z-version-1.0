 function validateSignUpForm() {
   
				var e = "";
				var validity = true;
				
              //  var phoneno = /^\d{10}$/;
			    var fnameregex = /^[a-zA-Z]+$/;
                var lnameregex = /^[a-zA-Z]+$/;
                var emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
				var passwordregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
                var cfpasswordregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
					
				f = document.getElementById("fname");
                l= document.getElementById("lname");
                e = document.getElementById("email");
                p= document.getElementById("password");
                cp= document.getElementById("cfpassword");


                f.classList.remove("is-invalid");
                l.classList.remove("is-invalid");	
				e.classList.remove("is-invalid");
                p.classList.remove("is-invalid");	
                cp.classList.remove("is-invalid");

				if ( (f.value == "" )||!fnameregex.test(f.value)) {
					f.classList.add("is-invalid");
					validity = false;
				}

                if ( (l.value == "") ||!lnameregex.test(l.value)) {
					l.classList.add("is-invalid");
					validity = false;
				}
               
				if ( (e.value == "") || !emailregex.test(e.value) ) {
					e.classList.add("is-invalid");
					validity = false;
				}
				
                if ( (p.value == "") || !passwordregex.test(p.value) ) {
					p.classList.add("is-invalid");
					validity = false;
				}

                if ((cp.value == "") || !cfpasswordregex.test(cp.value)){
                    cp.classList.add("is-invalid");
                    validity = false;
                     }

				return validity;
			}	


 function validateLoginForm() {
   
				var e = "";
				var validity = true;
					
			
                var emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
				var passwordregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
					
				e = document.getElementById("email");
                p= document.getElementById("password");
                
				e.classList.remove("is-invalid");
                p.classList.remove("is-invalid");	

				if ( (e.value == "") || !emailregex.test(e.value) ) {
					e.classList.add("is-invalid");
					validity = false;
				}else
				
                if ( (p.value == "") || !passwordregex.test(p.value) ) {
					p.classList.add("is-invalid");
					validity = false;
				}
				return validity;
			}	


function validateContactForm() {
 
    var myform = document.getElementById("form"); 
     
//alert pops-up if the name field is empty 
     if (myform.name.value =="") {
   
     alert("Fill your name. Your name field is empty");
     myform.name.focus();
     return false; 
     }  
	  
//alert pops-up if the box for the email ID is empty	  
if (myform.email.value == "") {
	 
   alert("Please enter your email ID.");
  myform.email.focus();
 return  false;
 }

 else { 
  alert("Submiitted your info. successfuly. We will get back to you soon");
}
 }

		 




