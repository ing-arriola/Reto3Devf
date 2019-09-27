class primer {
  constructor(callback,h) {
    console.log("He completado el paso 1");
    callback(h)
  }
}

module.exports={
  primer
}
