const interest = () => {
    const titil6 = 'Consider everyone\' s best interest';
    const text6 = 'HR is for everyone. Clerksy can help you.';
    const section6El = document.querySelector('.root');
    const items = [
        {
            
            icon: '../assets/images/interest/ico1.svg',
            head1: 'Protect Your',
            head2: 'Company',
            lists: {
                list1: 'Compliance Audits & Training',
                list2: 'Employee Data Storage',
                list3: 'Policy Drafting'
            }

        },
        {
            icon: '../assets/images/interest/ico2.svg',
            head: 'Set Your Employees ',
            head2: 'Up For Success',
            lists: {
                list1: 'Learning & Development',
                list2: 'Employee Relations',
                list3: 'Benefit Management',
            } 
        },
        {

            icon: '../assets/images/interest/ico3.svg',
            head: 'Know Your Industry\'s ',
            head2: 'Legal Landscape',
            lists: {
                list1: 'Work Place Investigations',
                list2: 'Employee Mediations',
                list3: 'Performance Tracking'
            } 
        },
    ];
    const section6HTML = `
        <section>
            <div class="container">
                <h2 class="textBg title_h2 mb">${titil6}</h2>
                <p class="textBg">${text6}</p>
                <div class="blocks">

                </div>
            </div>
        </section>
    `;
    section6El.insertAdjacentHTML('beforeend', section6HTML);
    items.forEach(key => {
        const blocks = document.querySelector('.blocks');
        const blockEl = `
            <div class="card">
                <div class="card__icon p">
                    <img src=${key.icon}>
                </div>
                <h4 class="textBg card__h4">${key.head1}</h4>
                <h4 class="textBg card__h4">${key.head2}</h4> 
                <ul class="card__list mt_1em"> 
                    <li class="textBg">${key.lists.list1}</li>
                    <li class="textBg mt_1em">${key.lists.list2}</li>
                    <li class="textBg mt_1em">${key.lists.list3}</li>   
                </ul>
            </div>
            
        `;
        blocks.insertAdjacentHTML('beforeend', blockEl); 
    });
    
}

export default interest;