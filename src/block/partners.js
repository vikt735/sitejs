const partners = () => {
    const section2El = document.querySelector('.root');
    const title2 = 'We partner with the best';
    const icons = [
        'assets/images/partners/icon1.svg',
        'assets/images/partners/icon2.svg',
        'assets/images/partners/icon3.svg',
        'assets/images/partners/icon4.svg',
        'assets/images/partners/icon5.svg'
    ];

    const section2HTML = `
        <section>
            <div class="container">
                <h2 class="textBg title_h2 mb">${title2}</h2>
                
                <div class="icons">

                </div>
                
            </div>
        </section>
    `;
    section2El.insertAdjacentHTML('beforeend', section2HTML);

    const iconsLink = document.querySelector('.icons');

    for (let i = 0; i < icons.length; i++) {
        let imgs = `<img src=${icons[i]}>`;
        const sectionLink = `<a class="icons__link">${imgs}</a> `;
        iconsLink.insertAdjacentHTML('beforeend', sectionLink);
    } 
}

export default partners;