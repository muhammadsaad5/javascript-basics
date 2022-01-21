class formValidation{
    constructor(){
        console.log("hello i am a constructor")
    }
     check_name(check){
            if(isNaN(check)){
                return true;
            }
            else return false;
    }
     check_number(check){
            if(!isNaN(check)){
                return true;
            }
            else
               return false;
    }
     check_textLenght(check){
            if(check.length <= 10){
                return true;
            }
            else
               return false;
    }
}
   var fv = new formValidation();
   console.log(fv.check_name("saad1"));
   console.log(fv.check_name("221"));
   
   console.log(fv.check_number("ali123"));
   console.log(fv.check_number("123"));
   
   console.log(fv.check_textLenght("abc123"));
   console.log(fv.check_textLenght("abc12345678976328762"));
