//main app

let user = {
    nome: 'Thomas Reyes',
    ocupation: 'UI/UX - Front end',
    location: 'Rio de Janeiro',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    rating: 4.5,
    jobs: 450,
    hoursWorked: '13,5k',
    followers: 523
};


// Dom elements
let followersNumber = document.querySelector('.followers');
const aboutText = document.querySelector('.info__about p ');

//dom events

//followers
const followBtn = document.querySelector('.followBtn');

let newFollow = 0;
 followBtn.addEventListener('click',()=>{
    if(newFollow<1){
        user.followers += 1;
        followBtn.classList.add('folowed');
        followBtn.innerHTML = 'Unfollow'
        documentContent.addRemoveflows()
        newFollow++
    }else{
        followBtn.innerHTML = '<img src="svg/on/follow.svg" alt="">Follow'
        user.followers -= 1;
        followBtn.classList.remove('folowed');
        documentContent.addRemoveflows()
        newFollow = 0 
    };
});





// functions
const documentContent = {
    insertContent(){
        followersNumber.innerHTML = user.followers;
        aboutText.innerHTML = `${user.about.substring(0,125)}... <span class="seeMore" onclick="documentContent.seemore()">ler mais</span>`; 
    },
    addRemoveflows(){
        followersNumber.innerHTML = user.followers;
    },
    seemore(){
        textH = document.querySelector('.info__about p').clientHeight
        letter = user.about.length;
        if(textH==60){
            aboutText.innerHTML = `${user.about.substring(0,letter)}... <span class="seeMore" onclick="documentContent.seemore()">Ver menos</span>`;
        }else{
            aboutText.innerHTML = `${user.about.substring(0,125)}... <span class="seeMore" onclick="documentContent.seemore()">ler mais</span>`; 
        }

    }
}


//

//laod
window.addEventListener('load', ()=>{
    documentContent.insertContent();
})




