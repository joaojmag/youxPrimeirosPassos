var elements = document.querySelectorAll('[class="lecture-name"]');

for (var i = 0; i < elements.length; i++) {
    var value = elements[i].textContent || elements[i].innerText;
    console.log(value);
}

// Basta mudar o id="text" pelo id desejado
// class="lecture-name"