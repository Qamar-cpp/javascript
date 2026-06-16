console.log("Script loaded: hello its me qamar");

// This changes the text on the web page so you can see it
window.onload = function() {
    const heading = document.querySelector('h1');
    if (heading) {
        heading.innerText = "hello its me qamar";
        heading.style.color = "black";
    }
    alert("hello its me qamar");
};