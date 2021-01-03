const singUp = () => {
    const section10El = document.querySelector('.root');
    const title = 'Stay up to date!';
    const text = 'Sign up for the latest Clerksy news. ';
    const btn = 'Sign Up';
    const policy = 'By submitting your email you agree to receive updates about Clerksy. You can unsubscribe at any time. View our full';
    const link = 'Privacy Policy';
    const section10HTML = `
        <section class="pt">
            <div class="container">
                <div class="sing ">
                    <div class="sing__col1 mb">
                        <h2 class="textBg title_h2">${title}</h2>
                        <p class="textBg">${text}</p>   
                    </div>
                    <div class="sing__col2 ">
                        <form method="get" class="sing__up mb">
                            <input class="sing__input" type="email" placeholder="Your email"  autofocus>
                            <button class="sing__left button">${btn}</button>
                        </form>
                        <div> 
                            <p class="textBg">${policy} <a href="#" class="sing__link">${link}</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
    section10El.insertAdjacentHTML('beforeend', section10HTML);

};
export default singUp;