const staff = () => {
    const section4El = document.querySelector('.root');
    const title = 'Employees come in all shapes and ';
    const title2 = 'sizes. Find the right fit.';
    const text = 'Focus on casting and screening. Let Clerksy handle contracts, resolve any on set-conflicts ';
    const text2 = 'and make sure you are compliant with work and safety boards.';
    const img = 'assets/images/staff/img.png';
    const section4HTML = `
        <section class="colorBgBeige pt">
            <div class="container">
                <h2 class=" textBg title_h2">${title}</h2>
                <h2 class=" textBg title_h2 mb">${title2}</h2>
                <p class="textBg">${text}</p>
                <p class="textBg mb">${text2}</p>
                <div>
                    <img src=${img} alt="img">
                </div>
            </div>
        </section>
    `;

    section4El.insertAdjacentHTML('beforeend', section4HTML);
}

export default staff;