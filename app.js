// https://api.adviceslip.com/advice

//select elements
const quoteBtn = document.querySelector('.dice');
const advice = document.querySelector('#advice-id');
const quote = document.querySelector('.advice-quote');


//fetch remote quote and insert into page
const render = async () => {
  // fetch('https://api.adviceslip.com/advice')
  //   .then(response => response.json())
  //   .then((data) => {
  //     advice.innerText = `ADVICE #${data['slip'].id}`;
  //     quote.innerText = `${data['slip'].advice}`;  
  //   })
  try {
    const request = await fetch('https://api.adviceslip.com/advice');

    if (request.ok) {
      const response = await request.json();

      advice.innerText = `ADVICE #${response['slip'].id}`;
      quote.innerText = `${response['slip'].advice}`;
    }
  } catch (err) {
    //this section is for testing only
    // it can be modified for other features.
    console.log("Error was caught", err);
  }
}


quoteBtn.addEventListener('click', render);
