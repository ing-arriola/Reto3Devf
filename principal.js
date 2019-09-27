const {primer}=require('./e1')
const {segundo}=require('./e2')
const {tercer}=require('./e3')
const {cuarto}=require('./e4')
let x= function saludar(){
    console.log("Ahora saludo desde Callback")
}
let z= function segundaF(){
    return "Saludo desde "
}

const salu=new primer(x)
const eje2=new segundo(z,"hola")
const eje2b=new segundo(z,"OtraCosa")
const third=new tercer(10,9,"mul")
const four=new cuarto("CaDeNaCoNlEtRaSaLtErNaS","ma")
