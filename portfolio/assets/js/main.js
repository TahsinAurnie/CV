const allSections = document.querySelector('.main-content');
const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');


function pageTransitions() {
    // nav button click active-btn class
    // document.addEventListener('DOMContentLoaded', function () {
    console.log(sectBtn.length);
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () {
            let currentBtn = document.querySelectorAll('.active-btn');
            console.log(currentBtn);
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }
    // sections active class
    // allSections.addEventListener('click', (e) => {
    //     const id = e.target.dataset.id;
    //     console.log(id)
    //     if (id) {
    //         //remove active from the other buttons
    //         sectBtns.forEach((btn) => {
    //             btn.classList.remove('active')
    //         })
    //         e.target.classList.add('active')

    //         //hide other sections
    //         sections.forEach((sect) => {
    //             sect.classList.remove('active')
    //         })
    //         // const element = document.getElementById(id);
    //         // element.classList.add('active');
    //     }
    // });
    //toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode')
    });
    // });
}
pageTransitions();

