const infoDate = document.body.querySelector('.footer__year'),
    year = new Date();
infoDate.innerHTML = `${year.getFullYear()}`;