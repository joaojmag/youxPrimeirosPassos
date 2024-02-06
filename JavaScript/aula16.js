const objs = document.getElementsByTagName('div')

let num = [10, 20, 30, 40, 50, 60, 70,]

for (i of objs)
    console.log(i.innerHTML = 'olaaa');

for (i in objs)
    console.log(objs[i].innerHTML);
