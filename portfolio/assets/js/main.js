const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function pageTransitions(){
    //button click active class
        for(let i=0; i<sectBtn.length; i++){
            sectBtn[i].addEventListener('click', function(){
                let currentBtn = document.querySelectorAll('.active-btn');
                currentBtn[0].className = currentBtn[0].className.replace('active-btn','');
                this.className += ' active-btn';
            })
        }
        //sections active class
        allSections.addEventListener('click', (e)=>{
            const id = e.target.dataset.id;        
            console.log(id)
            if(id){
                //remove selected from the other buttons
                sectBtns.forEach((btn)=>{
                    btn.classList.remove('active')
                })
                e.target.classList.add('active')
    
                //hide other sections
                sections.forEach((sect)=>{
                    sect.classList.remove('active')
                })
                const element = document.getElementById(id);
                element.classList.add('active');
                // console.log(element)
            }
        })
    //toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', ()=>{
        let element = document.body;
        element.classList.toggle('light-mode')
    })
}  
pageTransitions();


