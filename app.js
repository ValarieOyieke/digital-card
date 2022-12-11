const fileUpload = document.getElementById('fileUpload')
const fullName = document.getElementById('fullName')
const profession = document.getElementById('profession')
const displayName = document.getElementById('display-name')
const displayProfession = document.getElementById('display-profession')
const inputFacebookLink = document.getElementById('input-facebook-link')
const inputTwitterLink = document.getElementById('input-twitter-link')
const inputLinkedInLink = document.getElementById('input-linkedIn-link')
const inputInstagramLink = document.getElementById('input-instagram-link')
const inputEmailLink = document.getElementById('input-email-link')
const inputYoutubeLink = document.getElementById('input-youtube-link')
const cardColor = document.getElementById('card-color')
const textColor = document.getElementById('text-color')
const fbLink = document.getElementById('fb-link')
const twitterLink = document.getElementById('twitter-link')
const linkedinLink = document.getElementById('linkedin-link')
const instagramLink = document.getElementById('instagram-link')
const emailLink = document.getElementById('email-link')
const youtubeLink = document.getElementById('youtube-link')
const cardBtn = document.getElementById('get-card-btn')


  
fullName.addEventListener('input', (event) => {
    displayName.textContent = event.currentTarget.value
  });
  
profession.addEventListener('input', (event) => {
    displayProfession.textContent = event.currentTarget.value
  });


function getLinks() {
    fbLink.href = inputFacebookLink.value
    twitterLink.href = inputTwitterLink.value
    linkedinLink.href = inputLinkedInLink.value
    instagramLink.href = inputInstagramLink.value
    emailLink.href = inputEmailLink.value
    youtubeLink.href = inputYoutubeLink.value
}

getLinks()


cardBtn.addEventListener('click', ()=>{
    // add code   
})