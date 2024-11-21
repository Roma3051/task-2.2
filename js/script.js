"use strict";

const cardsData = [
    {
        id: 'red',
        type: 'red',
        imgSrc: './img/red-fox.svg',
        title: 'Red smile fox',
        buttonImgSrc: './img/heart.svg',
        description: 'Lorem ipsum dolor sit amet, eu mei posse possim atomorum, vix cu fabellas assueverit. Vel ad option partiendo maiestatis, nec affert appetere.',
        moreLink: '#'
    },
    {
        id: 'pet1',
        type: 'pet',
        imgSrc: './img/pet-fox.svg',
        title: 'Pet smile fox',
        buttonImgSrc: './img/heart.svg',
        description: 'Lorem ipsum dolor sit amet, eu mei posse possim atomorum, vix cu fabellas assueverit. Vel ad option.',
        moreLink: '#'
    },
    {
        id: 'arctic',
        type: 'arctic',
        imgSrc: './img/artict-fox.svg',
        title: 'Arctic smile fox',
        buttonImgSrc: './img/heart.svg',
        description: 'Lorem ipsum dolor sit amet, eu mei posse possim atomorum, vix cu fabellas assueverit. Vel ad option partiendo maiestatis, nec affert appetere te, his assentior, libris docendi tractatos mea eu.',
        moreLink: '#'
    },
    {
        id: 'kit',
        type: 'kit',
        imgSrc: './img/kit-fox.svg',
        title: 'Kit smile fox',
        buttonImgSrc: './img/heart.svg',
        description: 'Lorem ipsum dolor sit amet, eu mei posse possim atomorum, vix cu fabellas assueverit. Vel ad option partiendo maiestatis, nec affert appetere te, his ipsum corpora no.',
        moreLink: '#'
    },
    {
        id: 'pet2',
        type: 'pet',
        imgSrc: './img/pet-fox-1.svg',
        title: 'Pet smile fox',
        buttonImgSrc: './img/heart.svg',
        description: 'Lorem ipsum dolor sit amet, eu mei posse possim atomorum, vix cu fabellas assueverit. Vel ad option partiendo maiestatis, nec affert appetere te.',
        moreLink: '#'
    },
    {
        id: 'kit1',
        type: 'kit',
        imgSrc: './img/kit-fox-1.svg',
        title: 'Kit smile fox',
        buttonImgSrc: './img/heart.svg',
        description: 'Lorem ipsum dolor sit amet, eu mei posse possim atomorum, vix cu fabellas assueverit. Vel ad option partiendo maiestatis, nec affert appetere te.',
        moreLink: '#'
    },
    {
        id: 'fennec',
        type: 'fennec',
        imgSrc: './img/fennec-fox.svg',
        title: 'Fennec smile fox',
        buttonImgSrc: './img/heart.svg',
        description: 'Lorem ipsum dolor sit amet, eu mei posse possim atomorum, vix cu fabellas assueverit. Vel ad option partiendo maiestatis, nec affert appetere te, his assentior, libris docendi tractatos mea eu.',
        moreLink: '#'
    },
    {
        id: 'red1',
        type: 'red',
        imgSrc: './img/red-fox-1.svg',
        title: 'Red smile fox',
        buttonImgSrc: './img/heart.svg',
        description: 'Lorem ipsum dolor sit amet, eu mei posse possim atomorum, vix cu fabellas assueverit. Vel ad option partiendo maiestatis, nec affert appetere te, his \assentior, libris docendi tractatos mea eu.',
        moreLink: '#'
    }
];

function initMenu() {
    const container = document.querySelector('.columns');
  
    function generateCard(cardData) {
      return `
        <div class="card ${cardData.type}">
          <img src="${cardData.imgSrc}" alt="fox">
          <div class="info">
            <div class="title">
              <h3>${cardData.title}</h3>
              <button>
                <img src="${cardData.buttonImgSrc}" alt="Heart">
              </button>
            </div>
            <p>${cardData.description}</p>
            <a href="${cardData.moreLink}">Read more >></a>
          </div>
        </div>
      `;
    }
  
    function renderCards(category = 'all') {
      container.innerHTML = '';
  
      const filteredCards = (category === 'all') ? cardsData : cardsData.filter(card => card.type === category);
  
      filteredCards.forEach(cardData => {
        const card = generateCard(cardData);
        container.innerHTML += card;
      });
    }
  
    renderCards();
  
    const buttons = document.querySelectorAll('.fox');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const category = button.id;
        renderCards(category);
      });
    });
  }
  
  document.addEventListener('DOMContentLoaded', initMenu);

