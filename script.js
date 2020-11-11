function initAnimacaoScroll() {
  const sectionsScroll = document.querySelectorAll(".js-scroll");
  if (sectionsScroll.length) {
    const windowMetate = window.innerHeight * 0.6;

    function animaScroll() {
      sectionsScroll.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetate < 0;
        if (isSectionVisible) {
          section.classList.add("ativo");
        }
      });
    }
    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}
initAnimacaoScroll();
