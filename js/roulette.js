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
  const betNumberInput = document.getElementById('betNumber');
  const betAmountInput = document.getElementById('betAmount');

  spinBtn.onclick = () => {
    const betNumber = parseInt(betNumberInput.value);
    const betAmount = parseFloat(betAmountInput.value);

    if (isNaN(betNumber) || betNumber < 1 || betNumber > 36) {
      alert("Lütfen 1 ile 36 arasında geçerli bir sayı seçin.");
      return;
    }
    if (isNaN(betAmount) || betAmount <= 0) {
      alert("Lütfen geçerli bir bahis miktarı girin.");
      return;
    }
    if (betAmount > user.balance) {
      alert("Yeterli bakiyeniz yok!");
      return;
    }

    user.balance -= betAmount;

    const spinResult = Math.floor(Math.random() * 36) + 1;

    if (spinResult === betNumber) {
      const winAmount = betAmount * 35;
      user.balance += winAmount;
      resultMessage.textContent = `Tebrikler! Rulet sayısı ${spinResult} ve kazandınız! ${winAmount}₺ kazandınız. 🎉`;
    } else {
      resultMessage.textContent = `Rulet sayısı ${spinResult}. Kaybettiniz, tekrar deneyin!`;
    }

    balanceDisplay.textContent = user.balance.toFixed(2);
    users[username] = user;
    localStorage.setItem('demoUsers', JSON.stringify(users));
  };

  balanceDisplay.textContent = user.balance.toFixed(2);
});
