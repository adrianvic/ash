const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
let keyIndex = 0;

document.addEventListener('keydown', function(event) {
  // Check if the pressed key matches the next key in the Konami code sequence
  if (event.code === konamiCode[keyIndex]) {
    keyIndex++; // Move to the next key in the sequence
    // Check if the entire Konami code sequence has been entered
    if (keyIndex === konamiCode.length) {
        // Do the stuff
        if(confirm("Isso vai redirecionar você para um site externo (Perennialte Invidious), deseja continuar?")) {
          window.location.href = 'https://invidious.perennialte.ch/search?q=Just+Fine+Sam+%26+Cat'
        }
        keyIndex = 0;
    }
  } else {
    // Reset the index if the wrong key is pressed
    keyIndex = 0;
  }
});