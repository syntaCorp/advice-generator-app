// https://api.adviceslip.com/advice

//select elements
const quoteBtn = document.querySelector('.dice');
const advice = document.querySelector('#advice-id');
const quote = document.querySelector('.advice-quote');


//fetch quote and insert into page
const render = () => {
  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then((data) => {
      advice.innerText = `ADVICE #${data['slip'].id}`;
      quote.innerText = `${data['slip'].advice}`;  
    })
}

//update advice on click
quoteBtn.addEventListener('click', render);
