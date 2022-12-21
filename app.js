// https://api.adviceslip.com/advice

//select elements
const quoteBtn = document.querySelector('.dice');
const advice = document.querySelector('#advice-id');
const quote = document.querySelector('.advice-quote');


//fetch remote quote and insert into page
const render = async() => {
  // fetch('https://api.adviceslip.com/advice')
  //   .then(response => response.json())
  //   .then((data) => {
  //     advice.innerText = `ADVICE #${data['slip'].id}`;
  //     quote.innerHTML = `&#8220${data['slip'].advice}&#8221`;  
  //   })
  try {
    const request = await fetch('https://api.adviceslip.com/advice', {cache: 'no-cache'});

    if (request.ok) {
      const response = await request.json();

      advice.innerText = `ADVICE #${response['slip'].id}`;
      quote.innerHTML = `&#8220${response['slip'].advice}&#8221`; 
    }
  } catch (err) {
    //this section is for testing only
    // it can be modified for other features.
    console.log("Error was caught", err);
  }
}


quoteBtn.addEventListener('click', render);
