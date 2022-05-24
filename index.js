const contarLetrasEnPalabra = (string, letraParam) =>{
    const arrayOfString = Array.from(string)
    const filteredArray =  arrayOfString.filter((letra)=>{
        return letra === letraParam
    })
    return filteredArray.length
}



module.exports = contarLetrasEnPalabra