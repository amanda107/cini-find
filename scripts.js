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
            return `<li><a href="#">
		
            

<div class="film-container"><!-- power rangers -->
        <a href="power.html"><h2 class="film-title">${article.header}</h2></a>
        <a href="power.html"><img class="film-banner"src="${article.image}" alt="power rangers poster"/></a>
        <a href="power.html"><p class="film-intro">${article.subheader}</p></a>
        <div class="times">
            <button class="btn-time">14:30</button>
            <button class="btn-time">17:30</button>
            <button class="btn-time">19:30</button>
        </div>
</div>`;// beauty and beast
            

            
            
            
        }).join("\n");
        const articlesContainer = document.getElementById('articles');
        articlesContainer.innerHTML = articlesHTML;
    });