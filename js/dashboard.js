window.addEventListener('DOMContentLoaded', () => {
  const username = localStorage.getItem('loggedInUser');
  if (!username) {
    window.location.href = 'index.html';
    return;
  }

  let users = JSON.parse(localStorage.getItem('demoUsers') || '{}');
  let user = users[username];

  const userDisplay = document.getElementById('userDisplay');
  const balanceDisplay = document.getElementById('balanceDisplay');
  const loadDemoMoneyBtn = document.getElementById('loadDemoMoney');
  const logoutBtn = document.getElementById('logoutBtn');

  userDisplay.textContent = username;
  balanceDisplay.textContent = user.balance.toFixed(2);

  loadDemoMoneyBtn.onclick = () => {
    user.balance += 1000;
    balanceDisplay.textContent = user.balance.toFixed(2);
    users[username] = user;
    localStorage.setItem('demoUsers', JSON.stringify(users));
  };

  logoutBtn.onclick = () => {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'index.html';
  };
});
