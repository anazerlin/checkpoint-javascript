const box = document.querySelector('.box');

box.addEventListener('mouseover', () => {
	box.textContent = box.textContent === 'Olá' ? 'Tchau' : 'Olá';
	box.style.backgroundColor = box.style.backgroundColor === 'green' ? 'yellow' : 'green';
});

box.addEventListener('mouseout', () => {
	box.textContent = box.textContent === 'Tchau' ? 'Olá' : 'Tchau';
	box.style.backgroundColor = box.style.backgroundColor === 'yellow' ? 'green' : 'yellow';
});