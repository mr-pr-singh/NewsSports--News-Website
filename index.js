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
                <div class = "d-flex justify-content-end position-absolute end-0">
                <span class="badge rounded-pill bg-danger">${element.source['name']}</span>
                </div>
                  <img src="${element['urlToImage']}" class="card-img-top" alt="newsImage">
                  <div class="card-body">
                    <h5 class="card-title">${element['title']}</h5>
                    <p class="card-text">${element['content']}</p>
                    <p class="card-text"><small class="text-muted">By ${!element.author ? 'unknown' : element.author} At ${new Date(element.publishedAt).toGMTString()}</small></p>
                    <a href="${element['url']}" target = "_blank" class="btn btn-sm btn-dark">Read More</a>
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