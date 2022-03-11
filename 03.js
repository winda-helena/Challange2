//3
var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
function validasiEmail(emailAdress){
    
    if (typeof (emailAdress) == "string"){
        var hasil = regex.test(emailAdress)
        if (hasil == true){
            return "Valid"
        } else{
            return "Invalid"
        }
    } else{
        return "Error"
    }
}
console.log(validasiEmail("apranata@binar.co.id")); //Valid
console.log(validasiEmail("apranata@binar.com")); //Valid
console.log(validasiEmail("apranata@binar")); //Invalid
console.log(validasiEmail("apranata")); //Error
console.log(validasiEmail(3322)); //Error
console.log(validasiEmail()); //Error
//end 3