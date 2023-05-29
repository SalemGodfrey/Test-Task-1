window.addEventListener('load', function () {
    document.body.classList.add('loaded');
  });

  function openModalReg() {
    document.querySelector(".popupS").style.display = "block";
    document.querySelector(".popupL").style.display = "none";
  }
  function openModalLog() {
    document.querySelector(".popupL").style.display = "block";
    document.querySelector(".popupS").style.display = "none";
  }
  function closeModalReg() {
    document.querySelector(".popupS").style.display = "none";
  }
  function closeModalLog() {
    document.querySelector(".popupL").style.display = "none";
  }
