function initAccordionList(){
  const dt = document.querySelectorAll('.js-dt');
  const dd = document.querySelectorAll('.js-dd');
  if (dd.length || dt.length) {
    dt[0].classList.add('ativo')
    dd[0].classList.add('ativo');
    function aparecerDd(index) {
      dd[index].classList.toggle('ativo');
      dt[index].classList.toggle('ativo')
    }

    dt.forEach((item, index) => {
      item.addEventListener('click', () => {
        aparecerDd(index);
      });
    })
  }
}
initAccordionList();
