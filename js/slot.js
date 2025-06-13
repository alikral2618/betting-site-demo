window.addEventListener('DOMContentLoaded', () => {
  const username = localStorage.getItem('loggedInUser');
  if (!username) {
    window.location.href = 'index.html';
    return;
  }

  let users = JSON.parse(localStorage.getItem('demoUsers') || '{}');
  let user = users[username];

  const balanceDisplay = document.getElementById('balanceDisplay');
  const spinBtn = document.getElementById('spinBtn');
  const resultMessage = document.getElementById('resultMessage');
  const reels = document.querySelectorAll('.reel');

  const symbols = ['🍒', '🍋', '🍊', '🍉', '⭐', '7️⃣', '🍇', '🍓', '🍍', '🥝'];

  const animationDuration = 2000;
  const animationDelays = [0, 300, 600, 900, 1200];

  function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

  spinBtn.onclick = () => {
    if (user.balance < 100) {
      alert("Yeterli bakiyeniz yok! Demo para yükleyin.");
      return;
    }

    spinBtn.disabled = true;
    resultMessage.textContent = '';
    user.balance -= 100;
    balanceDisplay.textContent = user.balance.toFixed(2);

    reels.forEach((reel, i) => {
      reel.style.animation = `spinAnimation ${animationDuration}ms ease-in-out ${animationDelays[i]}ms forwards`;
    });

    setTimeout(() => {
      const finalSymbols = [];

      reels.forEach((reel, i) => {
        const symbol = getRandomSymbol();
        finalSymbols.push(symbol);
        reel.textContent = symbol;
        reel.style.animation = '';
      });

      const winAmount = calculateWin(finalSymbols);
      user.balance += winAmount;
      balanceDisplay.textContent = user.balance.toFixed(2);
      users[username] = user;
      localStorage.setItem('demoUsers', JSON.stringify(users));

      if (winAmount > 0) {
        resultMessage.textContent = `Tebrikler! ${winAmount}₺ kazandınız! 🎉`;
      } else {
        resultMessage.textContent = `Üzgünüz, kazanamadınız. Tekrar deneyin!`;
      }

      spinBtn.disabled = false;
    }, animationDuration + animationDelays[animationDelays.length - 1]);
  };

  function calculateWin(spinResult) {
    const counts = {};
    spinResult.forEach(s => counts[s] = (counts[s] || 0) + 1);
    const maxCount = Math.max(...Object.values(counts));

    if (maxCount === 5) {
      if (spinResult[0] === '7️⃣') return 5000;
      if (spinResult[0] === '⭐') return 3000;
      return 2000;
    }
    if (maxCount === 4) return 500;
    if (maxCount === 3) return 200;
    if (maxCount === 2) return 50;
    return 0;
  }

  balanceDisplay.textContent = user.balance.toFixed(2);
});
