function validateContactForm()  {
  
		var myform = document.getElementById("form3"); 
		
//alert pops-up if the name field is empty 
      if (myform.name.value =="") {
    
	  alert("Fill your name. Your name field is empty");
	  myform.name.focus();
	  return false; 
	  
	  } 
	 

// alerts if the field for the mobile number is empty	  
	  if (myform.mobile.value =="") {
     
	 alert("Fill your mobile number. The field is empty");
	 myform.mobile.focus();
	  return false; 
	  
	  }
	  
//alerts if the mobile number text box has text instead of a number	 
	  if (isNaN(myform.mobile.value))  {
    
	   alert("Please enter your hand phone number and not a text ") ;
	    myform.mobile.focus();
	   return false; 
	   
    }
	   
  //  alert pops-up for checking 10 digits HP number
       if(myform.mobile.value.length != 10)  {
          alert("Your mobile number should have 10 digits");
		   myform.mobile.focus();
		  return false;
   }
   
	  
//alert pops-up if the box for the email ID is empty	  
	  if (myform.email.value == "") {
	 
        alert("Please enter your email ID");
		 myform.email.focus();
		return  false;
      } 
	
 
// alert to select the radio option button	(buy /sell/rent)
  
	  var radOption =-1;
	  for(i=0;  i< myform.bsr.length; i++)
	       if ( myform.bsr[i].checked ){
		   radOption = i;
		   }
		   
		   if(radOption== -1){
            alert("Please select  buy, sell or rent ");
			 myform.buy.focus();
		    return  false;
      }  
	  
	  
//alert to verify if atleast one checkbox is checked 	  
	  var Unit = myform.unit.checked;
	  var Townhouse = myform.townhouse.checked;
	  var House = myform.house.checked;
   
if (Unit == false &&  Townhouse == false && House== false) {
      
         alert("Please select the property types");
		 myform.unit.focus();
         return false;
	
  }


//alert pops-up if the drop-down selection has not been made 

     var selection =myform.bedrooms.value;
	 
	 if(selection == 0) {
	 alert("Please select the number of bedrooms you prefer ");
	 
	 return false;
	 
	 }
	 
	 if(!confirm("Is all the below information correct? \nYour name is:" + myform.name.value +"\nYour Mobile No. is:" + myform.mobile.value +"\nYour email ID is:" + myform.email.value +   "\nClick cancel to make changes")){
				return false;
	} 
	
	
	else {
              alert("Thanks for the information, "+ myform.name.value+" !");
              return true;
            
          }
      
        } 


