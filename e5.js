class quinto {
  constructor(hrs) {
    fsuperior(hrs,calculaHoras)
  }
}

let calculaHoras=function(variasHoras){
    let arr=[]
    let pos=0
    for (var i = 0; i < variasHoras.length; i++) {
      if (variasHoras[i]/60>2){
        pos=pos++
        arr[pos]=variasHoras[i]
      }
    }
    return "Los minutos que son mas de 2 horas son: "+arr
}

let fsuperior=function(hr,callback){
  console.log("El resultado es: "+callback(hr))
}
module.exports={
  quinto
}
