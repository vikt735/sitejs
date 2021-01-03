const qvality = () => {
    const section3El = document.querySelector('.root');
    const title3 = 'HR Production of the Highest Quality';
    const cards = [
        {
            icon: 'assets/images/qvality/item1.svg',
            text: 'Educates & Informs ',
            text2: 'Employee Expectations',
        },
        {
            icon: 'assets/images/qvality/item2.svg',
            text: 'Protects Your ',
            text2: 'Business Just in Case',
        },
        {
            icon: 'assets/images/qvality/item3.svg',
            text: 'Manages & Stores ',
            text2: 'Important Documents'
        },
        {
            icon: 'assets/images/qvality/item4.svg',
            text: 'Create a Healthy ',
            text2: 'Work Environment'
        },

    ];
    
    const section3HTML = `
        <section class="bgColor pt">
            <div class="container">
                <h2 class="title_h2 mb">${title3}</h2>
                <div class="cards">
                    
                </div>
            </div>
        </section>
    `;

    section3El.insertAdjacentHTML('beforeend', section3HTML);

    cards.forEach((key) => {
        const card = document.querySelector('.cards');
        const cardEl = `
            <div class="cards__item">
                <img src=${key.icon}>
                <p class="mt_1em">${key.text}</p>
                <p class="mb_2em">${key.text2}</p>
            </div>
        `;
        card.insertAdjacentHTML('beforeend', cardEl);
    });
}

export default qvality;