const staff = () => {
    const section4El = document.querySelector('.root');
    const title4 = 'Employees come in all shapes and ';
    const tit4 = 'sizes. Find the right fit.';
    const text4 = 'Focus on casting and screening. Let Clerksy handle contracts, resolve any on set-conflicts ';
    const text4_2 = 'and make sure you are compliant with work and safety boards.';
    const img4 = 'assets/images/staff/img.png';
    const section4HTML = `
        <section class="colorBgBeige pt">
            <div class="container">
                <h2 class=" textBg title_h2">${title4}</h2>
                <h2 class=" textBg title_h2 mb">${tit4}</h2>
                <p class="textBg">${text4}</p>
                <p class="textBg mb">${text4_2}</p>
                <div>
                    <img src=${img4} alt="img">
                </div>
            </div>
        </section>
    `;

    section4El.insertAdjacentHTML('beforeend', section4HTML);
}

export default staff;