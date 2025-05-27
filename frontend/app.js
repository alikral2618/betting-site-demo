function play() {
  const random = Math.random();
  if (random > 0.7) {
    document.getElementById('result').textContent = "Kazandın!";
  } else {
    document.getElementById('result').textContent = "Kaybettin.";
  }
}
