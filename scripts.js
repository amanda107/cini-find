      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
          console.log('Service worker registered successfully');
        }).catch(function(err) {
          console.log('Service worker registration failed: ', err);
        });
      }// service worker 




// link to json
fetch("articles.json")
    .then(response => {
        return response.json();
    }).then(articles => {
        const articlesHTML = articles.map(article => {
            return `
            

<div class="film-container"><!-- film -->
        <a href="${article.href}"><h2 class="film-title">${article.header}</h2></a>
        <a href="${article.href}"><img class="film-banner"src="${article.image}" alt="${article.header}"/></a>
        <a href="${article.href}"><p class="film-intro">${article.subheader}</p></a>
        <div class="times">
                 <a href="power-seat.html" alt="Reserve tickets to power rangers at 13:30" title="Reserve tickets to power rangers at 13:30" class="btn btn-time">13:30</a>
                 <a href="power-seat.html" alt="Reserve tickets to power rangers at 17:30" title="Reserve tickets to power rangers at 17:30" class="btn btn-time">17:30</a>
                 <a href="power-seat.html" alt="Reserve tickets to power rangers at 18:30" title="Reserve tickets to power rangers at 18:30" class="btn btn-time">18:30</a>
            </div>
    </div>`;
            
        }).join("\n");
        const articlesContainer = document.getElementById('film-now');
        articlesContainer.innerHTML = articlesHTML;
    });




