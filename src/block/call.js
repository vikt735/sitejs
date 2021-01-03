const call = () => {
    const section9El = document.querySelector('.root');
    const title = 'Get Started With Clerksy';
    const text = 'Make sure your business puts people first.';
    const btn = 'Book a Free Discovery Call';
    const imgBg = 'assets/images/call/image1.png';
    const imgBg2 = 'assets/images/call/image2.png';
    const book = 'assets/book/discrete.pdf';
    const section9HTML = `
        <section class="started">
            <div class="hide">
                <img src=${imgBg2} alt="">
            </div>
            <div class="container">
            <h2 class="textBg title_h2 mb">${title}</h2>
            <p class="textBg">${text}</p>
            <div class="mt_1em">
                <a href=${book} download class="button">${btn}</a>
            </div>
            </div>
            <div class="hide">
                <img src=${imgBg} alt="">
            </div>
        </section>
    `;
    section9El.insertAdjacentHTML('beforeend', section9HTML);

};
export default call;