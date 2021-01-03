const clerksy = () => {
    const section7El = document.querySelector('.root');
    const title = 'It\'s easy as 1, 2, 3';
    const text = 'Clerksy can help use your unique business needs. Here\'s how:';
    const button = 'Book Free Discovery Call';
    const descr1 = 'Fill out a form and tell us what';
    const descr2 = 'you\'re looking for:';
    const descr3 = 'Time it will take a Clerksy rep';
    const descr4 =  'to follow up:';
    const descr5 = 'Take advantage of our';
    const descr6 =  'monthly plans starting at:';
    const usd = '$969 USD';
    const time = '5 minutes';
    const time2 = '24 hours';
    const arrow = 'assets/images/clerksy/arrow1.svg';
    const arrow2 = 'assets/images/clerksy/arrow2.svg';
    const book = '../assets/book/discrete.pdf';
    const section7HTML = `
        <section class="colorBgBeige pt">
            <div class="container">
                <h2 class="textBg title_h2 ">${title}</h2>
                <p class="textBg mb_2em">${text}</p>
                <div class="time mb_2em ">
                    <div class="time__col1">
                        <p class="textBg">${descr1}</p>
                        <p class="textBg">${descr2}</p>
                        <h3 class="textBg card__h4 mt_1em">${time}</h3>
                    </div>
                    <div class="time__col2 mt_1em">
                        <img src=${arrow} alt="time">
                    </div>
                    <div class="time__col3 mt_1em">
                        <p class="textBg">${descr3}</p>
                        <p class="textBg">${descr4}</p>
                        <h3 class="textBg card__h4 mt_1em">${time2}</h3>
                    </div>
                    <div class="time__col4 mt_1em">
                        <img src=${arrow2} alt="time">
                    </div>
                    <div class="time__col5 mt_1em circle">
                        <div class="circle">
                            <p class="textBg">${descr5}</p>
                            <p class="textBg">${descr6}</p>
                            <h3 class="textBg card__h4 mt_1em">${usd}</h3>
                        </div>
                    </div>
                </div>
                <div class="ptb">
                    <a href=${book} download class="button">${button}</a>
                </div>
            </div>
        </section>
    `;
    section7El.insertAdjacentHTML('beforeend', section7HTML);
}
export default clerksy;