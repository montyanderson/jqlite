/* jqlite.js- Copyright 2013, Monty Anderson - http://montyanderson.co.uk */

function $(query) {
    
    var target;
    var methods;

    //Get element if it isn't the document
    
    if(query == document) {
        target = document;
    } else {
        target = document.querySelector(query);
    }

    //If previous ran properly it will create a new objects

    if(target) {
        methods = new Object({});
    }

    //Define all of the methods

    methods.html = function(html) {
        target.innerHTML = html;
    }

    methods.click = function(click) {
        target.addEventListener("click", function() {
            click();
        });
    }
 
    methods.attr = function(attr, value) {
        target.setAttribute(attr, value);
    }
    
    methods.ready = function(ready) {
        target.addEventListener("DOMContentLoaded", function() { //Will only work for document element
            ready();
        });
    }
    
    return methods;
    
}
