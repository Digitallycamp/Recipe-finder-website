// import { btnStyle } from './button';

// btnStyle();

const menuButton = document.querySelector('.menu-icon button');
const Mobilemenu = document.querySelector('.mobile-menu');

menuButton.addEventListener('click', function () {
	Mobilemenu.classList.toggle('toggle');
});
