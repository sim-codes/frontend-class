const inp = document.getElementById('inp');
const totalText = document.getElementById('total-text');
const remText = document.getElementById('rem-text');
const remVal = remText.innerHTML;

inp.addEventListener('input', () => {
    const total = inp.value.length;
    totalText.innerText = total;
    remText.innerText = remVal - total;

    if (total > remVal ) {
        inp.classList.add('error');
        alert('You have reached the maximum limit');
    } else {
        inp.classList.remove('error');
    }
});