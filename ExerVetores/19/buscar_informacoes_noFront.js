var elements = document.querySelectorAll('[id="text"]');

for (var i = 0; i < elements.length; i++) {
    var value = elements[i].textContent || elements[i].innerText;
    console.log(value);
}

// Basta mudar o id="text" pelo id desejado