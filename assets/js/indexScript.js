// Aggiungi la logica per nascondere il banner dei cookie quando viene accettato
const cookieBanner = document.querySelector('.cookie-banner');
const cookieAcceptButton = document.querySelector('.cookie-accept');

cookieAcceptButton.addEventListener('click', () => {
    cookieBanner.style.display = 'none';
});