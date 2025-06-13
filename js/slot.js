window.addEventListener('DOMContentLoaded', () => {
  const username = localStorage.getItem('loggedInUser');
  if (!username) {
    window.location.href = 'login.html';
    return;
  }

  let users = JSON.parse(localStorage.getItem('demoUsers') || '{}');
  let user = users[username];

  const balanceDisplay = document.getElementById('balanceDisplay');
  const spinBtn = document.getElementById('spinBtn');
  const resultMessage = document.getElementById('resultMessage');
  const reels = document.querySelectorAll('.reel');

  const symbols = ['🍒', '🍋', '🍊', '🍉', '⭐', '7️⃣'];

  function spinReels() {
    return [
      symbols[Math.floor(Math.random() * symbols.length)],
      symbols[Math.floor(Math.random() * symbols.length)],
      symbols[Math.floor(Math.random() * symbols.length)],
    ];
  }

  function calculateWin(spinResult) {
    if (spinResult[0] === spinResult[1] && spinResult[1] === spinResult[2]) {
      if (spinResult[0] === '7️⃣') return 1000;
      if (spinResult[0] === '⭐') return 500;
      return 200;
    }
    if (spinResult[0] === spinResult[1] || spinResult[1] === spinResult[2] || spinResult[0] === spinResult[2]) {
      return 50;
    }
    return 0;
  }

  spinBtn.onclick = () => {
    if (user.balance < 100) {
      alert("Yeterli bakiyeniz yok! Demo para yükleyin.");
      return;
    }
    user.balance -= 100; // bahis 100₺
    const spinResult = spinReels();
    reels.forEach((reel, i) => {
      reel.textContent = spinResult[i];
    });
    const winAmount = calculateWin(spinResult);
    user.balance += winAmount;
    balanceDisplay.textContent = user.balance.toFixed(2);
    users[username] = user;
    localStorage.setItem('demoUsers', JSON.stringify(users));
    if (winAmount > 0) {
      resultMessage.textContent = `Tebrikler! ${winAmount}₺ kazandınız! 🎉`;
    } else {
      resultMessage.textContent = `Üzgünüz, kazanamadınız. Tekrar deneyin!`;
    }
  };

  balanceDisplay.textContent = user.balance.toFixed(2);
});
