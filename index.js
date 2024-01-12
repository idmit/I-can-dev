const dropdown = document.querySelectorAll('.dropdown-select');
const dropdownModal = document.querySelectorAll('.dropdown-select-modal');
const cardList = document.querySelectorAll('.card');
const dropdownList = document.querySelectorAll('.dropdown-list');
const selectedItem = document.querySelectorAll('.selected-item');

const mobileSearchBtn = document.querySelector('.mobile-search-btn');
const logoForm = document.querySelector('.logo-form')

dropdown[0].addEventListener('click', () => {
  dropdown[0].classList.toggle('dropdown--active');
  dropdownList[0].classList.toggle('dropdown-list--active');
})

dropdown[1].addEventListener('click', () => {
  dropdown[1].classList.toggle('dropdown--active');
  dropdownList[1].classList.toggle('dropdown-list--active');
})

dropdownModal[0].addEventListener('click', () => {
  console.log('asd')
  dropdownModal[0].classList.toggle('dropdown--active');
  dropdownList[2].classList.toggle('dropdown-list--active');
})

dropdownModal[1].addEventListener('click', () => {
  dropdownModal[1].classList.toggle('dropdown--active');
  dropdownList[3].classList.toggle('dropdown-list--active');
})

dropdownList.forEach((elem) => {
  elem.addEventListener('click', (e) => {
    if (e.target.classList.contains('item-type')) {
      selectedItem[0].textContent = e.target.textContent;
      dropdown[0].classList.remove('dropdown--active');
      dropdownList[0].classList.remove('dropdown-list--active');
    }

    if (e.target.classList.contains('item-brand')) {
      selectedItem[1].textContent = e.target.textContent;
      dropdown[1].classList.remove('dropdown--active');
      dropdownList[1].classList.remove('dropdown-list--active');
    }

    if (e.target.classList.contains('item-type-modal')) {
      selectedItem[2].textContent = e.target.textContent;
      dropdownModal.forEach(el => el.classList.remove('dropdown--active'))
      dropdownList.forEach(el => el.classList.remove('dropdown-list--active'))
    }

    if (e.target.classList.contains('item-brand-modal')) {
      selectedItem[3].textContent = e.target.textContent;
      dropdownModal.forEach(el => el.classList.remove('dropdown--active'))
      dropdownList.forEach(el => el.classList.remove('dropdown-list--active'))
    }
})
})

const closeDropdown = () => {
  dropdownModal[0].classList.remove('dropdown--active');
  dropdownList[2].classList.remove('dropdown-list--active');
  dropdownModal[1].classList.remove('dropdown--active');
  dropdownList[3].classList.remove('dropdown-list--active');
}


mobileSearchBtn.addEventListener('click', () => {
  logoForm.classList.toggle('logo-form--active')
})


const burgerMenu = document.querySelector('.burger-menu');
const navBlock = document.querySelector('.nav-block');

burgerMenu.addEventListener('click', () => {
  navBlock.classList.toggle('nav-block--active')
})

const filterBtn = document.querySelector('.filter-btn');
const modal = document.querySelector('.modal');
const crossBtn = document.querySelector('.modal-close');

const openModal = () => {
  modal.classList.add('modal--show');
}

const closeModal = () => {
  modal.classList.remove('modal--show');
}

filterBtn.addEventListener('click', () => {
  openModal();
})

crossBtn.addEventListener('click', () => {
  closeModal();
  closeDropdown();
})

window.addEventListener('click', (e) => {
	if (e.target === modal) {
		closeModal();
    closeDropdown();
	}
})

window.addEventListener('keydown', (e) => {
	if (e.keyCode === 27) {
		closeModal();
    closeDropdown();
	}
})

