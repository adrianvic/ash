beforeTitle = document.getElementById("title").innerText;

function map(val, minA, maxA, minB, maxB) {
  return minB + ((val - minA) * (maxB - minB)) / (maxA - minA);
}

function removeExtension(filename) {
  return filename.split('.').slice(0, -1).join('.');
}

function Card3D(card, ev) {
  let img = card;
  let imgRect = card.getBoundingClientRect();
  let mouseX = ev.offsetX;
  let mouseY = ev.offsetY;
  let rotateY = map(mouseX, 0, imgRect.width, -25, 25);
  let rotateX = map(mouseY, 0, imgRect.height, 25, -25);
  let brightness = map(mouseY, 0, imgRect.height, 1.5, 0.5);
  
  img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.2)`;
  img.style.filter = `brightness(${brightness})`;

  const titleElement = document.getElementById('title');

  const filename = decodeURIComponent(img.src.split('/').pop());
  const filenameWithoutExt = removeExtension(filename); // Remove the extension
  titleElement.innerText = filenameWithoutExt; // Update to the filename without extension
}

var cards = document.querySelectorAll('.imageGalleryImage');

cards.forEach((card) => {
  card.addEventListener('mousemove', (ev) => {
    Card3D(card, ev);
    cards.forEach((otherCard) => {
      if (otherCard !== card) {
        otherCard.style.opacity = '0'; // Hide other cards
      }
    });
  });
  
  card.addEventListener('mouseleave', () => {
    let img = card;
    cards.forEach((otherCard) => {
      if (otherCard !== card) {
        otherCard.style.opacity = '1'; // Show other cards
      }
    });
    img.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    img.style.filter = 'brightness(1)';

    // Reset the title to the original text
    const titleElement = document.getElementById('title');
    titleElement.innerText = beforeTitle; // Restore the original title
  });
});
