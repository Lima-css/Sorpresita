document.getElementById("si-btn").addEventListener("click", function() {
    window.location.href = "lo_sabia.html";
});

document.getElementById("no-btn").addEventListener("mouseover", function() {
    this.style.position = "absolute";
    this.style.top = Math.random() * (window.innerHeight - this.clientHeight) + "px";
    this.style.left = Math.random() * (window.innerWidth - this.clientWidth) + "px";
});

