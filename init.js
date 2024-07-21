const stars = 400

for (let i =0; i < stars; i++) {
    let star = document.createElement("div")
    star.className = 'stars'
    var xy = randomPosition();
    star.style.top = xy[0] + 'px'
    star.style.left = xy[1] + 'px'
    document.body.append(star)
}

function randomPosition() {
    var y = window.innerWidth
    var x = window.innerHeight
    var randomX = Math.floor(Math.random() * x)
    var randomY = Math.floor(Math.random() * y)
    return [randomX, randomY]
}


// Sayfa tamamen yüklendiğinde çalışacak fonksiyon
document.addEventListener('DOMContentLoaded', function() {
    showModal();
});

function showModal() {
    // Modalı göster
    document.getElementById('musicModal').style.display = 'block';
}

function playMusic() {
    // Müziği oynat
    var audio = document.querySelector('audio');
    if (audio) {
        audio.play();
    }
    closeModal();
}

function closeModal() {
    // Modalı kapat
    document.getElementById('musicModal').style.display = 'none';
}