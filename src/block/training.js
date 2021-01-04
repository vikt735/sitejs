const training = () => {
    const section5El = document.querySelector('.root');
    const title = 'How the scenes fit together';
    const text = 'Employee Training & Development, Diversity & Inclusion Programs, and Conflict Resolution.';
    const img = 'assets/images/training/frame.png';
    const section5HTML = `
        <section class="pt">
            <div class="container">
                <div class="box ">
                    <div class="box__col2 mb">
                        <h2 class="textBg title_h2 mb">${title}</h2>
                        <p class="textBg">${text}</p>
                    </div>
                    <div class="box__col1">
                        <img src=${img} alt="img">
                    </div>
                </div>
            </div>
        </section>
    `;

    section5El.insertAdjacentHTML('beforeend', section5HTML);
}

export default training;