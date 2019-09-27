class segundo {
  constructor(callback,mnsj) {
      let r="-"
      r=callback()
      if (mnsj=="hola"){
          console.log(r+"console")
      }else{
        console.warn(r+"Warn");
      }

  }
}

module.exports={
  segundo
}
