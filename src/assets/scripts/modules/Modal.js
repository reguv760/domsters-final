import $ from 'jquery';

class Modal {
  constructor() {
    this.openModalButton = $('.open-modal');
    this.modal = $('.modal');
    this.closeModalButton = $('.modal__close');
    this.events();
  }

  events() {
    // clicking the open modal button
    this.openModalButton.click(this.openModal.bind(this));
    // clicking the X close modal button
    this.closeModalButton.click(this.closeModal.bind(this));
    // pushes the escape key
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(event) {
    if (event.keyCode === 27) this.closeModalButton.click();
  }

  openModal() {
    this.modal.addClass('modal--is-visible');
    return false;
  }

  closeModal() {
    this.modal.removeClass('modal--is-visible');
  }
}

export default Modal;
