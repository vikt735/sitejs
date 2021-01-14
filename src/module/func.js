
export const func = (btnSelector, modalSelector, closeSelector) => {
  const button = document.querySelector(btnSelector),
        modal = document.querySelector(modalSelector),
        closeBtn = document.querySelector(closeSelector);
  const showModal = () => {
    modal.style.display = 'block';
  };
  const hideModal = () => {
    modal.style.display = 'none';
  };
  button.addEventListener('click', showModal);
  closeBtn.addEventListener('click', hideModal);
  window.onclick = (e) => {
    if(e.target === modal) {
        modal.style.display = 'none';
  }
};
};