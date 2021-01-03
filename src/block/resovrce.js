const resovrce = () => {
    const section8El = document.querySelector('.root');
    const title = 'Not just another ';
    const title2 = 'HR resource.';
    const text = 'Simple. Entertaining. Informative.';
    const btn = 'Download E-book';
    const img = 'assets/images/resovrce/book.png';
    const book = 'assets/book/discrete.pdf';
    const section8HTML = `
        <section class="">
            <div class="container">
                <div class="box ">
                    <div class="box__col2 mb">
                        <h2 class="textBg title_h2">${title}</h2>
                        <h2 class="textBg title_h2 mb">${title2}</h2>
                        <p class="textBg ptb">${text}</p>
                        <div class="mt_1em">
                            <a href=${book} download class="button">${btn}</a>
                        </div>
                    </div>
                    <div class="box__col1">
                        <img src=${img} alt="img">
                    </div>
                </div>
            </div>
        </section>
    `;
    section8El.insertAdjacentHTML('beforeend', section8HTML);

};
export default resovrce;