class tercer {
  constructor(num1,num2,operacion) {
    switch (operacion) {
      case "sum":
          ops(num1,num2,suma)
        break;
      case "res":
          ops(num1,num2,resta)
        break;
      case "mul":
          ops(num1,num2,multi)
        break;
      default:
        console.log("La operacion no esta definida");
    }

  }
}

let suma=function(a,b){
  return a+b
};
let resta=function(a,b){
  return a-b
};
let multi=function(a,b){
  return a*b
};
let ops=function(num1,num2,callback){
  console.log("El resultado es: "+callback(num1,num2))
}
module.exports={
  tercer
}
