const training = () => {
    const section5El = document.querySelector('.root');
    const title5 = 'How the scenes fit together';
    const text5 = 'Employee Training & Development, Diversity & Inclusion Programs, and Conflict Resolution.';
    const img5 = 'assets/images/training/frame.png';
    const section5HTML = `
        <section class="pt">
            <div class="container">
                <div class="box ">
                    <div class="box__col2 mb">
                        <h2 class="textBg title_h2 mb">${title5}</h2>
                        <p class="textBg">${text5}</p>
                    </div>
                    <div class="box__col1">
                        <img src=${img5} alt="img">
                    </div>
                </div>
            </div>
        </section>
    `;

    section5El.insertAdjacentHTML('beforeend', section5HTML);
}

export default training;