const getElement = (selector) => {
  const element = document.querySelector(selector);

  if (element) return element;
  throw Error(`check class names no ${selector} class present`);
};

const links = getElement(".nav-links");
const navBtnDom = getElement(".nav-btn");

navBtnDom.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

// /date functionality

const date = getElement("#date");
const currentYear = new Date().getFullYear();
date.textContext = currentYear;
