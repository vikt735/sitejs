
const header = () => {
    const logo = 'assets/images/header/logo.svg';
    const login = 'Log in';
    const tel = '844-332-6440';
    const title = 'Running the show has never been so easy.';
    const text = 'Ready to put the human back in HR? Clerksy helps you set the stage with an inclusive and compliant workplace.';
    const imgBg = 'assets/images/header/Frame.png';
    const btn = 'Get Started';


    const headerEl = document.querySelector('.root');
    
    const headerHtml = `
        <header class="bgColor">
            <div class="container">
                <nav class="nav ">
                    <div class="nav__logo">
                        <img src=${logo} alt="logo">
                    </div>
                    <div class="nav__menu">
                        <a href="#" class="">${login}</a>
                        <a href="tel:" class="nav__link">${tel}</a>
                        <button class="nav__btn button">${btn}</button>
                    </div>
                </nav>
                <div class="box">
                    <div class="box__col2 mb_2em">
                        <h2 class="mb title_h2">${title}</h2>
                        <p>${text}</p>
                    </div>
                    <div class="box__col1 ">
                        <img class ="img" src=${imgBg} alt="bgimg">
                    </div>
                </div>
                <div class="modal BgYellow">
                    <div class="modal__close">&#10006;</div>
                    <div class="modal__block">
                    <h1 class="">Hello</h1>
                </div>
            </div>
            </div>
        </header>
            
    `;
    headerEl.insertAdjacentHTML('afterbegin', headerHtml);
    const modal = document.querySelector('.modal');
    const closeBtn = document.querySelector('.modal__close');
    const navBtn = document.querySelector('.nav__btn');
    const header = document.querySelector('header');
    const showModal = () => {
        modal.style.display = 'block';
    };
    const hideModal = () => {
        modal.style.display = 'none';
    }
    navBtn.addEventListener('click', showModal);
    closeBtn.addEventListener('click', hideModal);
    window.onclick = (e) => {
        if(e.target == modal) {
            modal.style.display = 'none';
        }
    }
    
    
};

export default header;