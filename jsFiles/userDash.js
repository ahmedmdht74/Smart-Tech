const buttons = document.querySelectorAll('.sticky');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.order'); 
    const info = card.querySelector('.dash .order .info'); 
    if (info.classList.contains('active')) {
        info.classList.remove('active');
        info.classList.add('hide');
      } else {
        info.classList.remove('hide');
        info.classList.add('active');
      }
    if (button.classList.contains('active')) {
        button.classList.remove('active');
      } else {
        button.classList.add('active');
      }
  });
});
// ------------------------------------
// ------------------------------------
// ------------------------------------

const items = document.querySelectorAll('.item');
const mainCard = document.querySelectorAll('.mainCard');

mainCard.forEach(card => {
    card.classList.add('hide2');
  });
  
//   cards[0].classList.remove('hide2');
//   cards[0].classList.add('active2');
  
  const savedCardIndex = localStorage.getItem('selectedCard');
  
  if (savedCardIndex) {
    const selectedCard = document.getElementById(savedCardIndex);
    selectedCard.classList.add('active2');
    selectedCard.classList.remove('hide2');
    mainCard.forEach(card => {
      if (card !== selectedCard) {
        card.classList.add('hide2');
      }
    });
  }
  
  items.forEach((item, index) => {
    item.addEventListener('click', () => {
      const relatedCard = mainCard[index];
  
      relatedCard.classList.add('active2');
      relatedCard.classList.remove('hide2');
  
      mainCard.forEach((card, cardIndex) => {
        if (cardIndex !== index) {
          card.classList.add('hide2');
        }
      });
  
      localStorage.setItem('selectedCard', relatedCard.id);
    });
  });