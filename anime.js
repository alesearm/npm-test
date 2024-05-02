console.log("Anime.js wird ausgeführt");
anime({
  targets: '.circle',
  translateX: 250,
  delay: anime.stagger(200, {start: 1000}),
  background: "#0070B4",
  direction: "alternate",
  complete: function() {
    document.getElementById('second-message').style.display = 'block';
  }
});
