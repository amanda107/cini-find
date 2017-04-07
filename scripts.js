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
				<img src="${article.image}" alt="Image of ${article.header}" />
				<h2>${article.header}</h2>
				<p>${article.subheader}</p>
				</a></li>`;
        }).join("\n");
        const articlesContainer = document.getElementById('articles');
        articlesContainer.innerHTML = articlesHTML;
    });