// tabs
function tabSwitch(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();




//buttons
var button = document.querySelectorAll('.btn');
for (var i = 0; i < button.length; i++) {
  button[i].onmousedown = function(e) {

    var x = (e.offsetX == undefined) ? e.layerX : e.offsetX;
    var y = (e.offsetY == undefined) ? e.layerY : e.offsetY;
    var effect = document.createElement('div');
    effect.className = 'effect';
    effect.style.top = y + 'px';
    effect.style.left = x + 'px';
    e.srcElement.appendChild(effect);
    setTimeout(function() {
      e.srcElement.removeChild(effect);
    }, 1100);
  }
}

// local storage

    function save()     {
        var fieldValue = document.getElementById('textfield').value;
        localStorage.setItem('text', fieldValue);  
    }
    
    function load()     {
        var storedValue = localStorage.getItem('text');
        if(storedValue) {
            document.getElementById('textfield').value = storedValue;
        }
        
    }
    function die() {
        document.getElementById('textfield').value = '';
        localStorage.removeItem('text');
    }


