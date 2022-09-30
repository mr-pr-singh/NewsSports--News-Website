let newsContainer = document.getElementById("newsContainer");


function fetchNews() {

    // instantiate xhr object
    const xhr = new XMLHttpRequest();

    xhr.open('GET', "sample.json", true);

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