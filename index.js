const dropdown = document.querySelectorAll('.dropdown-select');

const dropdownList = document.querySelectorAll('.dropdown-list');

const selectedItem = document.querySelectorAll('.selected-item');

dropdown[0].addEventListener('click', () => {
  dropdown[0].classList.toggle('dropdown--active');
  dropdownList[0].classList.toggle('dropdown-list--active');
})

dropdown[1].addEventListener('click', () => {
  dropdown[1].classList.toggle('dropdown--active');
  dropdownList[1].classList.toggle('dropdown-list--active');
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

})
})

