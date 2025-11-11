 (function(){
    const janela = document.querySelector('.janelaPet');
    const prev = document.querySelector('.btnPrevPet');
    const next = document.querySelector('.btnNextPet');

    if(!janela || !prev || !next) return;

    const step = () => janela.clientWidth;

    function updateButtons(){

      const maxScrollLeft = janela.scrollWidth - janela.clientWidth - 1;
      prev.disabled = janela.scrollLeft <= 0;
      next.disabled = janela.scrollLeft >= maxScrollLeft;
    }

    next.addEventListener('click', () => {
      janela.scrollBy({ left: step(), behavior: 'smooth' });

      setTimeout(updateButtons, 350);
    });

    prev.addEventListener('click', () => {
      janela.scrollBy({ left: -step(), behavior: 'smooth' });
      setTimeout(updateButtons, 350);
    });

    window.addEventListener('resize', updateButtons);
    janela.addEventListener('scroll', updateButtons, { passive: true });

    updateButtons();
  })();