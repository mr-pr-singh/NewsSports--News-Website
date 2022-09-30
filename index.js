require('dotenv').config();
let newsContainer = document.getElementById("newsContainer");

let apiKey = "45d8e1b8fffe45ec89c71e37e7511bc5";


function fetchNews() {

    // instantiate xhr object
    const xhr = new XMLHttpRequest();

    xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${apiKey}`, true);

    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let articles = json.articles;
            let newsHtml = "";
            articles.forEach(element => {
                let news = `<div class="col-md-4 my-2">
                 <div class="card">
                <img src="${element['urlToImage']}" class="card-img-top" alt="newsImage">
                <div class="card-body">
                  <h5 class="card-title">${element['title']}</h5>
                  <p class="card-text">${element['content']}</p>
                  <a href="${element['url']}" target = "_blank" class="btn btn-dark">Read More</a>
                </div>
              </div>
              </div>`
                newsHtml += news;

            });
            newsContainer.innerHTML = newsHtml;

        }
        else {
            console.log("an error occured");
        }
    }
    xhr.send();
}
fetchNews();