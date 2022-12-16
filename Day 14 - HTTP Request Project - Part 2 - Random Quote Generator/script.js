const btn = document.querySelector('.btn');
btn.addEventListener('click', getQuotes);
const number = document.getElementById('number');


function getQuotes(e) {
    e.preventDefault();
    if (number.value.length === 0) {
        alert('Please enter a number');
    } else {

        const http = new XMLHttpRequest();

        http.open('GET', "https://type.fit/api/quotes", true);

        http.onload = function () {
            if (http.status == 200) {
                const response = shuffle(JSON.parse(http.responseText));
                let output = "";
                /*
               response.forEach((quote) => {
                   output += `
               <li>Quote : ${quote.text}</li>
               <li>Author: ${quote.author}</li>
               <hr>
               `;
               }) */
                /*   for (let i = 0; i < this.response.length; i++) {
                      if (i == number.value) break;
                      else {
                          output += `
                  <li>Quote : ${response[i].text}</li>
                  <li>Author: ${response[i].author}</li>
                  <hr>`
                      }
                  } */
                for (let i = 0; i < this.response.length; i++) {
                    if (i == number.value) break;
                    else {
                        output += `
                <div class="each-div">        
                <h2 id="quote">Quote : ${response[i].text}</h2><br>
                <h2 id="author">Author: ${response[i].author}</h2>
                </div>`

                    }
                }
                document.querySelector(".div-quotes").innerHTML = output;

            }

        }

        http.send();
    }
}


function shuffle(quotes) {
    let CI = quotes.length, tempValue, randomeIndex;
    while (CI > 0) {
        randomeIndex = Math.floor(Math.random() * CI);  //1
        CI--;
        //Swap the last element with CI
        tempValue = quotes[CI];
        quotes[CI] = quotes[randomeIndex];
        quotes[randomeIndex] = tempValue;

    }
    return quotes;
}


