function calcolaSomma() {
    const numeri = document.querySelectorAll("#numeri input");
    let somma = 0;
    
    for (let i = 0; i < numeri.length; i++) {
      somma += parseInt(numeri[i].value);
    }
    
    const risultato = document.getElementById("risultato");
    risultato.innerHTML = `La somma dei numeri inseriti è: ${somma}.`;
  }
  
  // crea i campi input per i numeri
  const numeriDiv = document.getElementById("numeri");
  for (let i = 0; i < 10; i++) {
    const input = document.createElement("input");
    input.type = "number";
    numeriDiv.appendChild(input);
  }