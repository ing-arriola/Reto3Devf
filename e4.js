class cuarto {
  constructor(m,choice) {
    switch (choice) {
      case "ma":
          ops(m,mayus)
        break;
      case "mi":
          ops(m,minus)
        break;
      default:
        console.log("La operacion no esta definida");
    }
  }
}

let minus=function(mnsj){
  return mnsj.toLowerCase()
};
let mayus=function(mnsj){
  return mnsj.toUpperCase()
};

let ops=function(mj,callback){
  console.log("El resultado es: "+callback(mj))
}
module.exports={
  cuarto
}
