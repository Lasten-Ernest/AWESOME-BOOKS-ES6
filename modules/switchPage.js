const navLinks = document.querySelectorAll('.navLi');
const listPage = document.querySelector('.bookList');
const addPage = document.querySelector('.addBook');
const contactPage = document.querySelector('.contactInformation');

const pageSwitch = () => {
  navLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
      if (index === 0) {
        listPage.classList.remove('displayOnlclick');
        addPage.classList.add('displayOnlclick');
        contactPage.classList.add('displayOnlclick');
        navLinks[0].classList.add('listBooks');
        navLinks[1].classList.remove('listBooks');
        navLinks[2].classList.remove('listBooks');
      } else if (index === 1) {
        listPage.classList.add('displayOnlclick');
        addPage.classList.remove('displayOnlclick');
        contactPage.classList.add('displayOnlclick');
        navLinks[0].classList.remove('listBooks');
        navLinks[1].classList.add('listBooks');
        navLinks[2].classList.remove('listBooks');
      } else {
        listPage.classList.add('displayOnlclick');
        addPage.classList.add('displayOnlclick');
        contactPage.classList.remove('displayOnlclick');
        navLinks[0].classList.remove('listBooks');
        navLinks[1].classList.remove('listBooks');
        navLinks[2].classList.add('listBooks');
      }
    });
  });
};

export default pageSwitch;
