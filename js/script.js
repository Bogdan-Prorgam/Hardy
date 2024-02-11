let swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 60,
    loop: true,
  });



const secretBtn = document.querySelector('.secret__top_img');
const secretText = document.querySelector('.secret__top_text');
secretBtn.addEventListener('click', ()=> {
  secretBtn.classList.add('topAnimation')
  secretText.style.opacity = 1;
})


// Popap

const btnOpen = document.querySelector('.bootle1'),
      btnClose = document.querySelectorAll('.popap__close'),
      modal = document.querySelectorAll('.popap__overlay'),
      slideContainer = document.querySelectorAll('.slide_container');


for(let i = 0; i < slideContainer.length; i++) {
  slideContainer[i].addEventListener('click', e => {
    const currTab = e.target.dataset.taste;
    for(let i = 0; i < modal.length; i++) {
      modal[i].classList.remove('active');
      if(modal[i].dataset.popap == currTab) {
        modal[i].classList.add('active');
      }
    }
  })
}

const closeModal = () => {
  for(let i = 0; i < modal.length; i++) {
  modal[i].classList.remove('active');
  }
}


for(let i = 0; i < btnClose.length; i++) {
  btnClose[i].addEventListener('click', closeModal);
}


// FORM

  const openFormBtn = document.querySelectorAll('.partners');
  const formPopap = document.querySelector('.popap_form');
  for(let i = 0; i < openFormBtn.length; i++) {
    openFormBtn[i].addEventListener('click', () => {
      formPopap.classList.add('active');
    })
  }


// Fruits Univercity 
const sliderText = document.querySelectorAll('.slider__text');
const universityBlock = document.querySelectorAll('.university__block');


for(let i = 0; i < universityBlock.length; i++) {
  universityBlock[i].addEventListener('click', e => {
    const currTab = e.target.dataset.taste;
    for(let i = 0; i < modal.length; i++) {
      modal[i].classList.remove('active');
      if(modal[i].dataset.popap == currTab) {
        modal[i].classList.add('active');
      }
      else if(currTab == 7) {
        modal[i].classList.remove('active');
      }
    
    }
  })
}

for (let i = 0; i< sliderText.length; i++) {
  sliderText[i].addEventListener('click', ()=> {
    let popap = document.querySelector('.popap_university'); 
    popap.classList.add('active');
  })
}





// City popaps
const citys = document.querySelectorAll('.family__city');
for (let i = 0; i< citys.length; i++) {
  citys[i].addEventListener('click', ()=> {
    let popap = document.querySelector('.popap_city'); 
    popap.classList.add('active');
  })
}

const closePopapCity = () => {
  let popap = document.querySelector('.popap_city'); 
    popap.classList.remove('active');
}

// About block 

const aboutItem = document.querySelectorAll('.about__wrap__item');


for(let i = 0; i < aboutItem.length; i++) {
  aboutItem[i].addEventListener('click', e => {
    const currTab = e.target.dataset.taste;
    console.log(e.target.dataset.taste);
    for(let i = 0; i < modal.length; i++) {
      modal[i].classList.remove('active');
      if(modal[i].dataset.popap == currTab) {
        modal[i].classList.add('active');
      }
    }
  })
}


const aboutItemImg = document.querySelectorAll('.about__wrap__item img');

for(let i = 0; i < aboutItemImg.length; i++) {
  aboutItemImg[i].addEventListener('click', e => {
    const currTab = e.target.dataset.taste;
    console.log(e.target.dataset.taste);
    for(let i = 0; i < modal.length; i++) {
      modal[i].classList.remove('active');
      if(modal[i].dataset.popap == currTab) {
        modal[i].classList.add('active');
      }
    }
  })
}

// SCROLL 

var imagesUniv = document.querySelectorAll('.university_fruits');
new simpleParallax(imagesUniv, {
  scale:1.2,
  overflow: true,
  orientation: 'up',
	transition: 'cubic-bezier(0,0,0,1)'
});
/*
var tastes = document.querySelectorAll('.tastes__block .bottle');
new simpleParallax(tastes, {
  scale:1.8,
  overflow: true,
  orientation: 'up',
	transition: 'ease'
});
var images = document.querySelectorAll('.main__image');
new simpleParallax(images, {
  scale:1.8,
  overflow: true,
  delay: 0.5,
  orientation: 'down',
	transition: 'cubic-bezier(0,0,0,1)',
});

*/

var imagesAbout = document.querySelectorAll('.about__image');
new simpleParallax(imagesAbout, {
  scale:1.4,
  overflow: true,
	transition: 'cubic-bezier(0,0,0,1)'
});

var imagesSecret = document.querySelectorAll('.secret img');
new simpleParallax(imagesSecret, {
  scale:1.4,
  overflow: true,
  orientation: 'up',
	transition: 'cubic-bezier(0,0,0,1)'
});

var imagesNoSugar = document.querySelectorAll('.no-sugar img');
new simpleParallax(imagesNoSugar, {
  scale:1.2,
  overflow: true,
  orientation: 'up',
	transition: 'cubic-bezier(0,0,0,1)'
});

var drinks = document.querySelectorAll('.drinks_img');
new simpleParallax(drinks, {
  scale:1,
  overflow: true,
  orientation: 'up',
	transition: 'cubic-bezier(0,0,0,1)'
});

var fam = document.querySelectorAll('.family__wrap a');
new simpleParallax(fam, {
  scale:1.2,
  overflow: true,
  orientation: 'up',
	transition: 'cubic-bezier(0,0,0,1)'
});

var drinks = document.querySelectorAll('.drinks');
new simpleParallax(drinks, {
  scale:1.2,
  overflow: true,
  orientation: 'up',
	transition: 'cubic-bezier(0,0,0,1)'
});


window.addEventListener('scroll', (e) => {
  let mainImg = document.querySelectorAll('.main__image');
  if (window.scrollY > 0) {
    for(let i = 0; i < mainImg.length; i++) {
      mainImg[i].style.transform = `matrix(1, 0, 0, 1, 0, 0);`;
    }
  }else {
    for(let i = 0; i < mainImg.length; i++) {
      mainImg[i].style.transform = `scale(${window.scrollY / 100})`;
      mainImg[i].style.left = `scale(${window.scrollY / 100})%`;
    }
  }
 
  console.log(window.scrollY / 100)
 
});




