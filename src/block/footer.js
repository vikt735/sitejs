const footer = () => {
    const footerEl = document.querySelector('.root');
    const logoFooter = '../assets/images/footer/logofooter.svg',
            descr = 'A people company.',
            copy = '&copy; 2020 Clerksy, Inc. Clerksy is a registered trademark of Clerksy, Inc.';
const social = [
    '../assets/images/footer/f.svg',
    '../assets/images/footer/t.svg',
    '../assets/images/footer/in.svg',
    '../assets/images/footer/i.svg'
];
const menu = [
    'Privacy Policy',
    'Terms of Service',
    'GDPR',
    'Careers',
    'Press Kit'
];
    const footerHTML = `
    <footer class="colorBgBeige ">
        <div class="container">
            <div class="footer ">
                <div class="footer__row">
                    <div class="footer__logo">
                        <img src=${logoFooter}>
                    </div>
                    <div class="footer__title">
                        <h4 class="textBg">${descr}</h4>
                    </div>
                    <div class="footer__social">
                        <a class="footer__link" href="#"></a>
                    </div>
                </div>
                <div class="footer__line"></div >
                <div class="footer__row2">
                    <div>
                        <p class="textBg">${copy}</p>
                    </div>
                    <div class="footer__menu">

                    </div>
                </div>
            </div>
        </div>
    </footer>
    `;

    footerEl.insertAdjacentHTML('beforeend', footerHTML);

    social.forEach(key => {
        console.log(key);
        const linkBlock = document.querySelector('.footer__link');
        const link = `<img class="footer__icon" src=${key} alt="social">`;
        linkBlock.insertAdjacentHTML('beforeend', link);
    });
    menu.forEach(key => {
        console.log(key);
        const menuBlock = document.querySelector('.footer__menu');
        const menu = `<a class="textBg footer__nav" href="#">${key}</a>`;
        menuBlock.insertAdjacentHTML('beforeend', menu);
    });
}

export default footer;