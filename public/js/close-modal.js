let closeModal = document.querySelector('#close-info'),
    informationModal = document.querySelector('#information');

closeModal.addEventListener('click', () => {
    informationModal.classList.toggle('info-hidden');
})