//--------------api fetch data to server
// // Get Quotes from Api
//   let apiQuotes = [];
 
// //   show new Quote
//   function newQuote(){
// //    pick a random quote from apiquotes array
//     const quote = apiQuotes(Math.floor(Math.random() * apiQuotes.length));
//     console.log(quote);
//   }

// async function getQuotes(){
//   const apiUrls = '';
//   try{
//    const repsonse = await fetch(apiUrls);
//    apiQuotes = await Response.json();
// //    console.log(apiQuotes[12]);
// newQuote();
//   }catch(error){
// //    catch error here
// alert(apiUrls);
//   }

// }
// // onload
// getQuotes();


// local apifetch data

const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");
// Get Quotes from Api
// let apiQuotes = [];
 
//   show new Quote
  function newQuote(){
    loading();
//    pick a random quote from apiquotes array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    // console.log(quote);

    // check if Author field is blank and replace it with unknown
    if(!quote.author){
        authorText.textContent = "Unknown";
    }else{
        authorText.textContent = quote.author;
    }
   function tweetQuote(){
       const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
       window.open(twitterUrl, '_blank');
   }

   //show loading
   function loading(){
     loader.hidden = false;
     quoteContainer.hidden = true;
   }
  //  hide loading
  function complete(){
         quoteContainer.hidden = false;
         loader.hidden = true;
  }
    //check if quote length to determine styling
      if(quote.text.length > 50){
          quoteText.classList.add('long-quote');
      }else{
        quoteText.classList.remove('long-quote');
      }
    // set quote, hide loader
    quoteText.textContent = quote.text;
    complete();
  }

// onload
  newQuote();
  // loading();
//   tweetQuote();

  newQuoteBtn.addEventListener("click", newQuote);
  twitterBtn.addEventListener("click", tweetQuote);
// //   Get quotes from Api
// async function getQuotes(){
//   const apiUrls = '';
//   try{
//    const repsonse = await fetch(apiUrls);
//    apiQuotes = await Response.json();
// //    console.log(apiQuotes[12]);
// newQuote();
//   }catch(error){
// //    catch error here
// alert(apiUrls);
//   }

// }
// onload
// getQuotes();
