// Para verificar qual é o aparelho que está rodando
if (
    navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone|iPad|iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    || navigator.userAgent.match(/Opera Mini/i)
    || navigator.userAgent.match(/IEMobile/i)
) {
    console.log('Celular')
} else {
    console.log('PC')
}