document.addEventListener("DOMContentLoaded", function () {

  const toggler = document.getElementById('canvasToggle');
  const canvas  = document.getElementById('mobileCanvas');
  const overlay = document.getElementById('canvasOverlay');
  const closeBtn = document.getElementById('closesCanvas');

  if(!toggler || !canvas || !overlay || !closeBtn){
    console.log("Canvas menu elements not found");
    return;
  }

  /* Open Canvas */
  toggler.addEventListener('click', function () {
    canvas.classList.add('active');
    overlay.classList.add('active');
  });

  /* Close Canvas */
  function closeCanvas(){
    canvas.classList.remove('active');
    overlay.classList.remove('active');
  }

  closeBtn.addEventListener('click', closeCanvas);
  overlay.addEventListener('click', closeCanvas);

  /* Dropdown Toggle */
  document.querySelectorAll('.has-dropdown > span').forEach(item=>{
    item.addEventListener('click', function(){
      this.parentElement.classList.toggle('active');
    });
  });

});