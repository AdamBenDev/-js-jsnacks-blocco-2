
function trovaMaggiore() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const risultato = document.getElementById("risultato");
    
    if (num1 > num2) {
      risultato.innerHTML = "Il maggiore è: " + num1;
    } else if (num2 > num1) {
      risultato.innerHTML = "Il maggiore è: " + num2;
    } else {
      risultato.innerHTML = "I due numeri sono uguali.";
    }
  }