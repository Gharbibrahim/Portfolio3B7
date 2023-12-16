
const profileImage = document.getElementById('profile-image');


profileImage.style.width = '200px'; 
profileImage.style.borderRadius = '50%'; 

const aboutMeSection = document.querySelector('.about-me__wrapper');


aboutMeSection.addEventListener('mouseover', () => {
 
  aboutMeSection.classList.add('hovered');
});


aboutMeSection.addEventListener('mouseout', () => {
  
  aboutMeSection.classList.remove('hovered');
});
