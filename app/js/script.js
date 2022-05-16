'use strict';

document.addEventListener('DOMContentLoaded', () => {
    {
        const loader = document.getElementById('loading');
        setTimeout(() => {
            loader.classList.add('hide')
            setTimeout(() => loader.classList.add('d-none'), 300)
        }, 2000);

    }
});