const prompt = require('prompt-sync')();


// console.log(prompt("Escribe algo"));

const [name, surname] = process.argv.slice(2)

console.log("Hola", name? name : "", surname? surname:"")



function ask(){

  try{
    let mood = prompt("¿Qué tal? ")


switch(mood.toLowerCase()){
  case "bien":
    console.log("Me alegro :)")
    break;

  case "mal":
    console.log("Animo :(")
    break;

  default:
    console.log("Lo siento, no te he entendido.")
    ask()
    break;
}
  } catch(e){
    console.log("Vaya, parece que ha habido un error. Vuelve a intentarlo más adelante.")
  }


}

ask()