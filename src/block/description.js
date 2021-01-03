const description = () => {
    const img1 = '../assets/images/description/img1.png',
        img2 = '../assets/images/description/img2.png',
        title1 = 'Put the human back in HR.',
        title2 = 'You don’t have to play all the parts.',
        text1 = 'Your employees are the real stars. Show the love and help them perform!',
        text2 = 'Sales, accounting, HR— Oh My! You can’t do it all - let Clerksy help.'
    
    const section1El = document.querySelector('.root');

    const section1HTML = `
        <section class="mt_1em">
            <div class="container">
                    <div class="box mb_2em">
                        <div class="box__col1 mb">
                            <img src=${img1} alt="img">
                        </div>
                        <div class="box__col2">
                            <h2 class="textBg title_h2 mb">${title1}</h2>
                            <p class="textBg">${text1}</p>
                        </div>
                    </div>
                    <div class="box ">
                        <div class="box__col2 mb">
                            <h2 class="textBg title_h2 mb">${title2}</h2>
                            <p class="textBg">${text2}</p>
                        </div>
                        <div class="box__col1">
                            <img src=${img2} alt="img">
                        </div>
                    </div>
            </div>
        </section>
    `;

    section1El.insertAdjacentHTML('beforeend', section1HTML);
}

export default description;