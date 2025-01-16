$('.left').click(function(){
    $(this).toggleClass('open');
});


onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  


