const div = document.querySelector("div");
const btn = document.querySelector("button");

div.addEventListener("click", function() {
    return alert("Hola! Soy el div");
});

btn.addEventListener("click", (event) => {
        event.stopPropagation();
        return alert("Hola!");
});


