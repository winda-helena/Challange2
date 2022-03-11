//6
function getAngkaTerbesarKedua(personName) { 
    var number = Array.isArray(personName) 
    if (number == true){

    } else {
        return "Error: parameter ini bukan array"
    }
    var angkaKeDua = personName.sort ((a, b) => {
        return b - a
    });
    return angkaKeDua [1]
    
}

const dataAngka = [9,4,7,7,4,3,2,2,8]

console.log(getAngkaTerbesarKedua(dataAngka)); //8
console.log(getAngkaTerbesarKedua(0)); //Error
console.log(getAngkaTerbesarKedua()); //Error
//end 6
