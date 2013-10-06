/* jquery.youtube.js 1.0 - Copyright 2013, Monty Anderson - http://montyanderson.co.uk */

function jqlite() {

var $ = function(query) {
    
    var target = "";
    var method = new Object({});
    
    if(query == document) {
        target = document;
    } else {
        target = document.querySelector(query);
    }
    
    method.html = function(html) {
        target.innerHTML = html;
    }
    
    method.click = function(click) {
        target.addEventListener("click", function() {
            click();
        });
    }
 
    method.attr = function(attr, value) {
        target.setAttribute(attr, value);
    }
    
    method.ready = function(ready) {
        target.addEventListener("DOMContentLoaded", function() {
            ready();
        });
    }
    
    return method;
    
}

return $;

}