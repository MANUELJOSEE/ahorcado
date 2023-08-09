const letras = ["a","b","c","d","e","f","g","h","i","j","k","l","ñ","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
class keyBoard{
    constructor(){

    }
    createBoard(){
        const padre=document.createElement("div");
        let contador=0;
        //recorrer lista de letras y crear botones por cada letra usando bucle while
        while (contador<letras.length) {
            //crear elemento button
            const hijo=document.createElement("button");
            hijo.textContent=letras[contador];
            hijo.addEventListener("click",(e)=>{
                console.log(e.target.textContent);
            })
            //añadir elemento hijo(button) al padre (div)
            padre.appendChild(hijo)
            contador++;
        }
        return padre;
    }
}
export default keyBoard;