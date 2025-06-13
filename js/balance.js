window.addEventListener('DOMContentLoaded', () => {
  const username = localStorage.getItem('loggedInUser');
  if (!username) {
    window.location.href = 'login.html';
    return;
  }
  
  let users = JSON.parse(localStorage.getItem('demoUsers') || '{}');
  let user = users[username];
  
  const userDisplay = document.getElementById('userDisplay');
  const balanceDisplay = document.getElementById('balanceDisplay');
  const addFundsBtn = document.getElementById('addFundsBtn');
  const logoutBtn = document.getElementById('logoutBtn');
  
  userDisplay.textContent = username;
  balanceDisplay.textContent = user.balance.toFixed(2);
  
  addFundsBtn.onclick = () => {
    user.balance += 1000;
    users[username] = user;
    localStorage.setItem('demoUsers', JSON.stringify(users));
    balanceDisplay.textContent = user.balance.toFixed(2);
    alert("Demo hesabınıza 1000₺ yüklendi!");
  };
  
  logoutBtn.onclick = () => {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'login.html';
  };
});
