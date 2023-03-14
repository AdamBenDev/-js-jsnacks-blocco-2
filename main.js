function trovaParole() {
    const parola1 = document.getElementById("parola1").value;
    const parola2 = document.getElementById("parola2").value;
    const risultato = document.getElementById("risultato");
  
    if (parola1.length < parola2.length) {
      risultato.innerHTML = `La parola più corta è: ${parola1}. La parola più lunga è: ${parola2}.`;
    } else if (parola2.length < parola1.length) {
      risultato.innerHTML = `La parola più corta è: ${parola2}. La parola più lunga è: ${parola1}.`;
    } else {
      risultato.innerHTML = "Le due parole sono lunghe uguali.";
    }
  }