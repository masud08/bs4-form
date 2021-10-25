const btn = document.querySelector('.submit-btn');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    alert('submitted');
})