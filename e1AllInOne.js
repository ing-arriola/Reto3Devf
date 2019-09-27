//funcion que sera pasada como argumento
let x= function saludar(){
    console.log("Ahora saludo desde Callback")
}
//funcion que recibira argumento
let y=function llamar(callback){
  console.log("He completado el paso 1")
  callback()
}
//Ejecucion de callback
y(x)
