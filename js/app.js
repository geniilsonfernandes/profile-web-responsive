//main app

let user = {
    nome: 'Thomas Reyes',
    ocupation: 'UI/UX - Front end',
    location: 'Rio de Janeiro',
    about: 'Meticulous web developer with over 2 years of front end experience and passion for responsive website design and a firm believer in the mobile-first approach. W3C certified. Implemented new responsive website approach which increased mobile traffic by 20.',
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
        aboutText.innerHTML = `${user.about.substring(0,175)}... <span class="seeMore" onclick="documentContent.seemore()">ler mais</span>`; 
    },
    addRemoveflows(){
        followersNumber.innerHTML = user.followers;
    },
    seemore(){
        textp = document.querySelector('.info__about p').textContent.length
        letter = user.about.length;
        console.log(textp,letter);
        if(textp<letter){
            aboutText.innerHTML = `${user.about.substring(0,letter)} <span class="seeMore" onclick="documentContent.seemore()">Ver menos</span>`;
        }else{
            aboutText.innerHTML = `${user.about.substring(0,175)}... <span class="seeMore" onclick="documentContent.seemore()">ler mais</span>`; 
        }

    }
}

//laod
window.addEventListener('load', ()=>{
    documentContent.insertContent();
})




