//2
function cekGanjilGenap(bilangan) {
    if (typeof(bilangan)=='number'){
        if (bilangan % 2 == 0) {
            return "bilangan Genap";
          } else {
            return "bilangan Ganjil";
          }

    }
    else if ( bilangan==null){
        return "Error : Broo where is the parameter?"
    }
    else{
        return("Error: data invalid")
    }
}
console.log(cekGanjilGenap(10)) ; //Genap
console.log(cekGanjilGenap(3)) ; //Ganjil
console.log(cekGanjilGenap("3")) ; //Error
console.log(cekGanjilGenap({})) ; //Error
console.log(cekGanjilGenap([])) ; //Error
console.log(cekGanjilGenap()) ; //Error
//end 2